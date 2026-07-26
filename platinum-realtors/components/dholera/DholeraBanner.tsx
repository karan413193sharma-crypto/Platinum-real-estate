"use client";

import Image from "next/image";

export default function DholeraBanner() {
  return (
    <>
      <style>{`

/* =====================================
   MAIN BANNER
===================================== */

.dh-banner{

  width:calc(100% - 80px);

  margin:20px auto;

  background:#1a3041;

  overflow:hidden;

  position:relative;

}


.dh-banner-inner{

  position:relative;

  max-width:1400px;

  min-height:300px;

  margin:auto;

  display:flex;

  align-items:center;

  gap:35px;

  padding:0 40px;

}



/* =====================================
   RED BACKGROUND BLOCK
===================================== */


.dh-banner-wedge{

  position:absolute;

  left:0;

  top:0;

  bottom:0;
  

  width:34%;

  background:#D7172A;

  z-index:0;

}



/* =====================================
   LEFT IMAGE CARD
===================================== */

.dh-banner-plot-card{

  position:relative;

  z-index:3;

  width:clamp(160px,16vw,220px);

  aspect-ratio:4/3;

  background:white;

  padding:10px;

  box-shadow:
  0 18px 40px rgba(0,0,0,.35);

  margin-left:clamp(30px,5vw,80px);

  flex-shrink:0;

  transform:none;
}



.dh-banner-plot-img-wrap{

  position:relative;

  width:100%;

  height:100%;

  overflow:hidden;

}



/* =====================================
   CENTER TEXT
===================================== */


.dh-banner-center{

  position:relative;

  z-index:2;

  flex:1;

  display:flex;
   padding-left:35px;
    padding-top:25px;

  align-items:center;

}



.dh-banner-text{


  color:white;

  opacity:.92;


  font-size:clamp(11px,1vw,13px);


  line-height:1.6;


  max-width:300px;


  margin:0;


}
  /* =====================================
   RIGHT IMAGE SECTION
===================================== */


.dh-banner-right{

  position:relative;

  z-index:2;

  flex:0 0 auto;

  display:flex;

  flex-direction:column;

  align-items:center;

  padding:25px 0;

}



.dh-banner-right-img-wrap{

  position:relative;

  width:clamp(150px,18vw,240px);

  aspect-ratio:1/1;

  box-shadow:
  0 15px 35px rgba(0,0,0,.35);

  transform:none;

  transition:.3s ease;

}



.dh-banner-right-img-wrap:hover{

  transform:scale(1.03);

}



.dh-banner-right-line{


  width:60%;


  height:2px;


  background:rgba(255,255,255,.45);


  margin-top:18px;


}





/* =====================================
   LARGE DESKTOP
===================================== */


@media(min-width:1200px){


  .dh-banner-inner{


    padding-left:50px;

    padding-right:50px;


  }



  .dh-banner-plot-card{


    margin-left:100px;


  }


}






/* =====================================
   TABLET
===================================== */


@media(max-width:1100px){


  .dh-banner-inner{


    gap:25px;


    padding:0 30px;


  }




  .dh-banner-wedge{


    width:40%;


  }



  .dh-banner-plot-card{


    margin-left:30px;


  }


}





/* =====================================
   MOBILE
===================================== */


@media(max-width:768px){


  .dh-banner{


    width:calc(100% - 30px);


    margin:15px auto;


  }




  .dh-banner-inner{


    flex-direction:column;


    align-items:center;


    gap:30px;


    padding:40px 20px;


  }




  .dh-banner-wedge{


    width:100%;


    height:230px;


  }




  .dh-banner-plot-card{


    width:200px;


    margin-left:0;


    margin-top:15px;


  }




  .dh-banner-center{


    justify-content:center;


    text-align:center;


  }




  .dh-banner-text{


    max-width:330px;


  }




  .dh-banner-right{


    padding-bottom:35px;


  }


}






/* =====================================
   SMALL MOBILE
===================================== */


@media(max-width:480px){


  .dh-banner{


    width:calc(100% - 20px);


  }




  .dh-banner-inner{


    padding:30px 15px;


  }




  .dh-banner-plot-card{


    width:170px;


  }




  .dh-banner-right-img-wrap{


    width:180px;


  }


}


`}</style>


<section className="dh-banner">


  <div className="dh-banner-inner">


    {/* Red background block */}
    <div 
      className="dh-banner-wedge"
      aria-hidden="true"
    />



    {/* Left floating image */}
    <div className="dh-banner-plot-card">


      <div className="dh-banner-plot-img-wrap">


        <Image

          src="/dholera/banner-left.jpg"

          alt="Dholera Plot Layout"

          fill

          sizes="220px"

          style={{
            objectFit:"cover"
          }}

        />


      </div>


    </div>





    {/* Center text */}

    <div className="dh-banner-center">


      <p className="dh-banner-text">

        Mangalam Gateway Dholera offers a smart investment opportunity in
        the heart of India's fastest-growing smart city. Secure your
        future with premium plots in a location built for tomorrow.


      </p>


    </div>






    {/* Right image */}


    <div className="dh-banner-right">


      <div className="dh-banner-right-img-wrap">


        <Image


          src="/dholera/banner-right.jpg"


          alt="Mangalam Aero Vista Navagam"


          fill


          sizes="240px"


          style={{
            objectFit:"cover"
          }}


        />


      </div>




      <div className="dh-banner-right-line"/>


    </div>




  </div>


</section>


</>
);
}