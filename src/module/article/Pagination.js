import Arrow from "../asset/Arrow";
import style from "./Pagination.module.css";

const Pagination = (prop) => {
  let pageNums = [];
  for (let i = 1; i <= prop.maxPage; i++) {
    pageNums.push(
      <span className={prop.currPage === i-1 && style.current}
      onClick={()=>{prop.onPageChanged(i-1)}}
      >{i}</span>
    );
  }

  const clickHandler = (direction) =>{
    const nowPage = prop.currPage + direction; 
    if (nowPage < prop.maxPage && nowPage > -1){
      prop.onPageChanged(prop.currPage+direction);
    }
    
  };

  return (
    <div className={style.pagination}>
      <Arrow direction="right" onClick={()=>clickHandler(-1)}/>
      {pageNums}
      <Arrow direction="left" onClick={()=>clickHandler(1)}/>
    </div>
  );
};

export default Pagination;
