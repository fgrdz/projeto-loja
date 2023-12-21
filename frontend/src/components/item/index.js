import style from './item.module.scss'

import {
    FaCartPlus
  } from 'react-icons/fa';

  import {
    AiOutlineHeart,
    AiFillHeart,
  } from 'react-icons/ai';
import { mudarFavorito } from '../../store/reducers/itensReducers';
import { useDispatch } from 'react-redux';

  const iconeProps = {
    size: 24,
    color: '#041833',
  };

  
const Item =(props)=>{
    const {
        titulo, foto, preco, descricao, id, favorito
    } = props;
const dispatch = useDispatch();

function resolverFavorito() {
      dispatch(mudarFavorito(id));
    }


return(
        <div className={style.item}>
            <div className={style['item-imagem']}>
                <img src={foto} alt={titulo}/>
            </div>
            <div className={style['item-descricao']}>
                <div className={style['item-titulo']}>
                   <h2>{titulo}</h2> 
                   <p>{descricao}</p>

                </div>
                <div className={style['item-info']}>
                    <div className={style['item-preco']}>
                        R${preco.toFixed(2)}
                    </div>
                    <div className={style['item-acoes']}>
                    {favorito
                        ? <AiFillHeart {...iconeProps} color='#ff0000' className={style['item-acao']} onClick={resolverFavorito}  />
                        : <AiOutlineHeart {...iconeProps} className={style['item-acao']}  onClick={resolverFavorito}  />
                        }
                        <FaCartPlus
                        {...iconeProps}
                        color={false ? '#1875E8' : iconeProps.color}
                        className={style['item-acao']}
                        />                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item