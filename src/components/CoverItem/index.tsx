import { memo } from 'react'

import { Box, Typography, capitalize } from '@mui/material'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { colors, fontSize } from '~/styles/theme'

import { CoverWrapperStyled, RelationTitleStyled, TitleLinkStyled } from './style'

interface Props {
  coverImage: string
  link: string
  relationType: string
  title: string
}

const CoverItem = ({ link, relationType, title, coverImage }: Props) => {
  return (
    <TitleLinkStyled to={link}>
      <CoverWrapperStyled>
        <LazyLoadImage alt="" effect="blur" height={120} src={coverImage || ''} width={90} />
        <Box display="flex" flexDirection="column" p={2}>
          <Typography color={colors.primary[100]} fontSize={fontSize[12]}>
            {capitalize(relationType)}
          </Typography>
          <Box width={150}>
            <RelationTitleStyled>{title}</RelationTitleStyled>
          </Box>
        </Box>
      </CoverWrapperStyled>
    </TitleLinkStyled>
  )
}
export default memo(CoverItem)
