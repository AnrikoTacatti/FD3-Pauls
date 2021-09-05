
function ProductList(props) {
    const [stproduct, setProduct] = React.useState(props.product);
    const [selectid, setSelectid] = React.useState(null);

    function Delete(productid, e) {
        e.stopPropagation();
        let isDelete = window.confirm("Вы действительно хотите удалить?");
        if (isDelete) {
            let prod = stproduct.filter((val) => {

                return val.id != productid
            });

            setProduct(prod);
        }
    }
    function Selected(productid, e) {
        debugger;
        if (selectid === productid) {
            setSelectid(null);
        }
        else {
            setSelectid(productid);
        }

    }
    return (
        <table border="1" width="100%" cellpadding="5">
            <caption>{props.name}</caption>
            <tr>
                <th>{props.colname.name}</th>
                <th>{props.colname.price}</th>
                <th>{props.colname.src}</th>
                <th>{props.colname.quality}</th>
                <th>контроль</th>
            </tr>
            {
                stproduct.map(function (el) {

                    return <ProductRow name={el.name} price={el.price} src={el.src} quality={el.quality} select={el.id === selectid} id={el.id} key={el.id} fbSelected={Selected} fbDelete={Delete} stproduct={stproduct} />;
                })
            }
        </table>
    );
};
ReactDOM.render(<ProductList name={tableName} colname={tableColName} product={product} />, document.getElementById('root'));

