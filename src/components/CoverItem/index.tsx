import { memo, useCallback } from 'react'

import { Box, Typography } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { colors, fontSize } from '~/styles/theme'
import { capitalize } from '~/utils/not-lodash'

import { CoverWrapperStyled, RelationTitleStyled, TitleLinkStyled } from './style'

interface Props {
  contentWidth?: string | number
  coverImage: string
  imageHeight?: string | number
  imageWidth?: string | number
  link?: string
  subTitle: string
  title: string
}

const CoverItem = ({
  contentWidth = '100%',
  coverImage,
  imageHeight = 120,
  imageWidth = 90,
  link = '',
  subTitle,
  title,
}: Props) => {
  const linkClickHandler = useCallback(
    (e) => {
      if (!link) {
        e.preventDefault()
      }
    },
    [link],
  )

  return (
    <TitleLinkStyled to={link} onClick={linkClickHandler}>
      <CoverWrapperStyled>
        <LazyLoadImage
          alt=""
          effect="blur"
          height={imageHeight}
          src={coverImage || ''}
          width={imageWidth}
        />
        <Box display="flex" flexDirection="column" p={2}>
          <Typography color={colors.primary[100]} fontSize={fontSize[12]}>
            {capitalize(title)}
          </Typography>
          <Box width={contentWidth}>
            <RelationTitleStyled>{subTitle}</RelationTitleStyled>
          </Box>
        </Box>
      </CoverWrapperStyled>
    </TitleLinkStyled>
  )
}
export default memo(CoverItem)
