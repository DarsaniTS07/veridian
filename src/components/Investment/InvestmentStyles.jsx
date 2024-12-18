

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
      width: '74.2%', 
     display:'flex',
     flexDirection:'column',
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
      }
 
}

export default InvestmentStyles