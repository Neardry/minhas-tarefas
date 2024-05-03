import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-decoration: none;
`
