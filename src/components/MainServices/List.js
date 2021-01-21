import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ListServices } from './itemsData'
import Text from './Text'

import * as S from './style'

const ContentList = ListServices.map((item) => {
  return (
    <S.CardStyled >
      <CardActionArea>
        <S.CardMediaStyled
          image={item.image}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </S.CardStyled>
  )
})

export const List = () => {
  return (
    <S.WrapperList >
      <S.ListItem>
        <h2>Serviços</h2>
        <Typography component="p">
          A Melanina Transporte e Logistica faz transporte de carga rodoviária a partir do Porto de Santos.
        </Typography>
      </S.ListItem>
      {ContentList}
      <Text />
    </S.WrapperList>
  )
}


