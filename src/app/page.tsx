import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
        <article className="start">
        <div style={{ textAlign: 'center' }}>
          <img className="rounded mt-5 " src="/image/시작화면.png" alt="시작화면" width="375" height="664"/>
      </div>
          <div className="start-cover mt-3 mb-3">
          <button type="button" className="btn-start btn btn-primary btn-lg btn-block" >START</button> {/* start function*/}
          </div>
      </article>
      <article className="question">
          <div className="progress mt-5">
              <div className="progress-bar" role="progressbar" style={{ width: `calc(100/12*1%)` }}></div>
          </div>
          <h2 id="title" className="question-content text-center mt-5 mb-5">문제</h2>
          <input id="type" type="hidden" value="EI"/>
          <div className="rectangle mt-5"></div>
          <button id="A" type="button" className="btn-answer btn btn-primary pt-5 pb-5">대답A</button>
          <div className="mid-rectangle"></div>
          <button id="B" type="button" className="btn-answer btn btn-primary pt-5 pb-5">대답B</button>
          <div className="rectangle"></div>
      </article>
      <article className="result">
          <span className="border"></span>
          <img id="img" className=" mt-5" src="image/사자.png" alt="animal"/>
          <span className="share-message mb-4">나의 휴식 메이트 <strong>공유하기</strong></span>
                  {/* <!-- Go to www.addthis.com/dashboard to customize your tools --> */}
                  <div className="share addthis_inline_share_toolbox"></div>
      </article>
      <article>
          <span className="mt-2 text-center copyright-text">ⓒ _wow_ssun ⓒ Getty Images Bank_@ color_life</span>
          <ins className="kakao_ad_area" style={{display: 'none'}} 
          data-ad-unit    = "DAN-2sAPQXHIQjQT7E0T" 
          data-ad-width   = "320" 
          data-ad-height  = "100"></ins> 
      </article>
      <input type="hidden" id="EI" value="0"/>
      <input type="hidden" id="SN" value="0"/>
      <input type="hidden" id="TF" value="0"/>
      <input type="hidden" id="JP" value="0"/>
      </div>
    </>
  );
}
