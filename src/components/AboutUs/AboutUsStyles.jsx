import { margin, width } from '@mui/system'
import React from 'react'

const AboutUsStyles = {
    aboutUsVeridian: {
        backgroundColor:'#ffffff',
        height:'17rem',
        width:'76rem',
        display:'flex',
        marginInline:'7%',
        // marginLeft:'6.6%',
        '@media(max-width:764px)':{
          display:'flex',
          flexDirection:'column',
          width:'32%',
          marginInline:'2.5%',
          height:'auto'
        }
      },
      aboutUsTypography:{
        fontSize:'25px',
        fontFamily:'IBM_Plex_Serif',
        fontWeight:600,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2rem',
        marginBottom:'1.5rem',
        marginLeft:'15%',
        '@media(max-width:764px)':{
            marginRight:'76%',
        }
      },
      aboutUsVeridianPic:{
        height:'47%',
        width:'30%',
        backgroundColor:'#e1f0ed',
        padding:'37px 97px',
        margin: '3% 1% 2% 3%',
       
        '@media(max-width:764px)':{
          margin:'6% 9% 0% 8%',
          width:'32%'
        }
      },
      aboutUsVeridianContent:{
        display:'flex',
        flexDirection:'column',
        fontSize:'15px',
        fontFamily:'DM_Sans',
        color:'secondary.main',
        marginTop:'1.2rem',
        marginInline:'2rem',
        marginBottom:'1.6rem',
        '@media(max-width:764px)':{
            // marginTop:'2%'
        }
      },
      fourParts:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        marginInline:'7%',
        gap:'2rem',
        marginTop:'2.5rem',
        '@media(max-width:764px)':{
          marginInline:'2.5%',
          width:'69%',
          display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          marginTop:'2%'
        }
    },
      content:{
        height:'auto',
        width:'48.5%',
        backgroundColor:'#ffffff',
        margin:'1rem 0rem',
        display:'flex',
        flexDirection:'row',
        '@media(max-width:764px)':{
          display:'flex',
          flexDirection:'column',
          paddingRight:'2%',
          width:'45%',
        }
      },
      contentTopic:{
        fontFamily:'IBM_Plex_Serif',
        color:'#091B29',
        fontSize:'18px',
        fontWeight:600,
        paddingTop:'1rem'
      },
      contentContent:{
        fontFamily:'DM_Sans',
        fontSize:'14px',
        color:'secondary.main',
        marginTop:'1rem',
        '@media(max-width:764px)':{
            width:'91%'
        }
      },
      contentImage:{
        marginTop:'1.6rem',
        '@media(max-width:764px)':{
            marginTop:'2%',
            
        }
      },
}

export default AboutUsStyles