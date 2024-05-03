import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />{' '}
    {/* A propriedade esta sendo apenas mencionada pois é a mesma coisa que escrever mostrarFiltros={true} */}
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
