import "./ProductItem.css"
const ProductItem = (props) => {
    const svg=props.svg;
    const name=props.name;
    const href=props.href;
    const X=props.X;
    const Y=props.Y;
    const cname="product_item "+name;

    return (  
        <div className={cname} style={{height:'30px',width:'30px',left:X,top:Y}}>
            <a href={href}><img src={svg} className="p1" alt={name} title={name}/></a>
        </div>
    );
}
 
export default ProductItem;

// position:'relative',top:'30%', left:'35%',
// style={{ height:'50px', width:'50px', borderRadius:'50%'}}