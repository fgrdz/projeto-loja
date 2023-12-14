import style from './busca.module.scss'


const Busca = ()=>{
    return(
        <>
            <div className={style.busca}>
                <input 
                    className={style.input}
                    placeholder='O que você procura'
                
                />
            </div>
            
        </>
    )
}

export default Busca