import { SelectorDiv } from './styles';

const SelectorPoducts = () => {
  return (
    <>
      <SelectorDiv>
        <label className="Name">Coca-cola 250ml</label>
        <img className="kuppiImage" src="https://static.carrefour.com.br/medias/sys_master/images/images/h3a/h3e/h00/h00/12175734472734.jpg" alt="kuppi" />
        <label className="Price">R$ 2,50</label>
        <button>Detalhes</button>
      </SelectorDiv>
    </>
  )

}

export default SelectorPoducts;