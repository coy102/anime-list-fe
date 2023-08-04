import { memo, useCallback } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { colors, fontSize } from '~/styles/theme'
import { capitalize, isEmpty } from '~/utils/not-lodash'

import { CoverWrapperStyled, RelationTitleStyled, TitleLinkStyled } from './style'

interface Props {
  contentWidth?: string | number
  coverImage: string
  imageHeight?: string | number
  imageWidth?: string | number
  link?: string
  renderAction?: React.ReactNode
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
  renderAction,
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
    <CoverWrapperStyled role="listitem">
      {!isEmpty(coverImage) && (
        <LazyLoadImage
          alt=""
          effect="blur"
          height={imageHeight}
          src={coverImage || ''}
          width={imageWidth}
        />
      )}

      {isEmpty(coverImage) && (
        <Box bgcolor={colors.primary[100]} height={imageHeight} width={imageWidth} />
      )}
      <Box display="flex" flexDirection="column" flexGrow={1} p={2}>
        <TitleLinkStyled to={link} onClick={linkClickHandler}>
          <Typography color={colors.primary[100]} fontSize={fontSize[16]}>
            {capitalize(title)}
          </Typography>

          <Box width={contentWidth}>
            <RelationTitleStyled>{subTitle}</RelationTitleStyled>
          </Box>
        </TitleLinkStyled>
      </Box>
      {renderAction}
    </CoverWrapperStyled>
  )
}
export default memo(CoverItem)
