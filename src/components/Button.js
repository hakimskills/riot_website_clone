import './Button.css'
const Button =()=>{
return(
    <div className='button hidden'>
       <a className='allContent'><div className='themed_icon'><span className="icon" > <div className='icon-button'><svg viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.003 14H3.5v-4h11.502l-4.165-4.538 2.705-2.947 7.353 8.012c.747.813.747 2.133 0 2.947l-7.353 8.011-2.705-2.947L15.003 14z" fill="#F0F0F0"></path></svg></div></span>
       <span style={{color:'white',fontSize:'31px',marginRight:'12px',textAlign:'center'}}> Learn More</span></div>
       </a>
</div>
);


}
export default Button ;