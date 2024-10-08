import { useSelector } from "react-redux";
import styles from "./Carrinho.module.scss";
import Item from "components/Item";
export default function Carrinho() {
  const carrinho = useSelector((state) => {
    const carrinhoReduce = state.carrinho.reduce((item, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      });
    }, []);
    return carrinhoReduce;
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira os produtos que voce adicionou no carrinho"
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        <div className={styles.total}>
          <strong>Resumo da compra</strong>
          <span>
            Subtotal: <strong>R$ {(0.0).toFixed(2)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
