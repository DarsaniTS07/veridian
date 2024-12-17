
const OurTeamStyles = {
    ourTeamTypography:{
        fontSize:'25px',
        fontFamily:'IBM_Plex_Serif',
        fontWeight:600,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'4rem',
        marginBottom:'2.7rem',
        marginLeft:'10rem',
        '@media(max-width:764px)':{
          marginRight:'76%',
          width:'30%'
        }
      },
      ourTeamContent:{
        position:'relative',
        display:'flex',
        flexDirection:'row',
       justifyContent:'center', 
        width: '87.4rem', 
        '@media(max-width:764px)':{
          width:'98%'
        }
      },
      parallelogramBox:{
       height:'91.5%',
       width:'93%',
       transform:'skew(-24deg)',
       backgroundColor:'#fff',
       margin:'20px',
       '@media(max-width:764px)':{
          transform:'skew(0deg)',
        }
      },
      parallelogramContent:{
        width:'50rem',
        fontFamily:'DM_Sans',
        transform:'none !important' ,
        
      },
      photo:{
        marginTop:'6.1rem',
        transform:'skew(24deg)',
        '@media(max-width:764px)':{
          transform:'skew(2deg)'
        }
      },
      ourTeamText:{
        transform:'skew(12deg)',
        fontSize:'14px',
        fontFamily:'DM_Sans',
        marginTop:'1rem',
        marginBottom:'1rem',
        marginLeft:'-2.2rem',
        color:'#717B85',
        '@media(max-width:764px)':{
          transform:'skew(0deg)',
        }
      },
      paragraph:{
        fontSize: '14px',
        marginBottom: '0.5rem',
        marginTop:'1rem',
        marginLeft:'-1rem',
        color:'#717B85'
      },
      smallParallelogram: {
        height:'4rem',
        width:'16rem',
        backgroundColor:'primary.main',
        alignItems:'center',
        display:'flex',
      },
      OurTeamName: {
          fontSize:'19px',
          fontFamily:'IBM_Sans_serif',
          color:'#fff',
          transform:'skew(24deg)',
          marginLeft:'5rem'
      },
      designation:{
        fontSize:'13px',
          fontFamily:'DM_Sans',
          color:'#fff',
          transform:'skew(24deg)',
          marginLeft:'4rem'
      },
      iconRightButton:{
        position: "absolute",
        top: "50%",
        right: "1%",
        zIndex: 10,
        transform: "translateY(-50%)",
        backgroundColor: "#11423f",
        color:"white",
        fontSize: "1.5em",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        "&:hover": { backgroundColor: "#f0f0f0" },
      },
      iconLeft:{
        position: "absolute",
        top: "50%",
        left: "1%",
        zIndex: 10,
        transform: "translateY(-50%)",
        backgroundColor: "#11423f",
        color:"white",
        fontSize: "1.5em",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        "&:hover": { backgroundColor: "#f0f0f0" },
      }
}

export default OurTeamStyles