

const InvestmentStyles  = {
    investmentTypography:{
        fontSize:'25px',
        fontFamily:'IBM_Plex_Serif',
        fontWeight:600,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'3rem',
       paddingBottom:'2rem'
      },
    investmentBox: {
        width:'26.2%',
        height:'40rem',
        backgroundColor:'#ffffff',
        marginInline:'15px',
        padding:'25px',
        '@media (max-width: 764px)': {
      width: '76.2%', 
     display:'flex',
     flexDirection:'column',
  marginInline:'6%'   
    },
    },
    investmentImage:{
       
    },
    investmentText:{
        fontSize:'18px',
        fontFamily:'IBM_Sans_Serif',
        fontWeight:600,
        marginTop:'1rem',
        marginBottom:'1rem'
    },
    investmentContent:{
        fontSize:'14px',
        fontFamily:'DM_Sans',
        color:'#717B85'
    },
    containerText: {
        fontSize: '14px',
        marginBottom: '0.5rem',
      },
      paragraph:{
        fontSize: '14px',
        marginBottom: '0.5rem',
      },
      pagination: {
        ".swiper-pagination": {
          bottom: "10px", // Position the dots below
        },
        ".swiper-pagination-bullet": {
          background: "gray",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          opacity: 0.6,
          transition: "all 0.3s ease",
        },
        ".swiper-pagination-bullet-active": {
          background: "black",
          width: "20px", // Twice the size for the active dot
          height: "10px",
          borderRadius: "5px",
          opacity: 1,
        },
      },
    };
 


export default InvestmentStyles