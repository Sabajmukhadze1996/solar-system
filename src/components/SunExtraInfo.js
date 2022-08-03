import React from 'react'
import sun_img from "./home-page-images/sun.png"
import { useState, useEffect } from 'react'

export const SunExtraInfo = () => {
    const [marsText, setMarsText] = useState(false);
    const [btnText, setBtnText] = useState("წაკითხვა")
    const [btnColor, setBtnColor] = useState("#1877F2")

    useEffect(() => {
        if (marsText === true) {
          setBtnText("დახურვა")
          setBtnColor("#011F5B")
          window.scrollTo(0, 400)
        } else {
          setBtnText("წაკითხვა")
          setBtnColor("#1877F2")
        }
    }, [marsText])

  return  (
<div id="sun-extra-info" className="extra-card-info-main-div" >
    <div className="card" id="planet-info-cards" style={{margin: "10rem auto"}}>
  <h5 style={{fontSize: "2rem"}} className="card-header fw-bold text-center">მზის სისტემის ცენტრში მდებარე ერთადერთი ვარსკვლავი.</h5>
  <div>
    <img id="extra-card-img" className="card-img w-50" src={sun_img} alt="mars"/>
  </div>
  <div className="card-body">
    <h5 style={{fontSize: "1.4rem"}}  className="card-title">მზის დიამეტრი დაახლოებით 1 392 684 კილომეტრია.</h5>
    <div id="read-more-div"  className="d-flex justify-content-between align-items-start pt-3">
      <p style={{fontSize: "1.7rem"}} className="card-text">წაიკითხე მეტი ამ ვარსკვლავის შესახებ...</p>
      <button id="read-more-btn" onClick={() => setMarsText(!marsText)} style={{backgroundColor: btnColor}} className="btn btn-primary">
        {btnText}
      </button>
    </div>
    {
      marsText ? 
      <p id="extra-info-paragraph">
ის თითქმის იდეალურად სფერულია და შედგება ცხელი პლაზმისგან, რომელშიც ჩაქსოვილია მაგნიტური ველები.[12][13] მზის დიამეტრი დაახლოებით 1 392 684 კილომეტრია[5] — დედამიწის დიამეტრზე 109-ჯერ დიდი. მისი მასა (1.989×1030 კილოგრამი; დედამიწის მასას დაახლოებით 330 000-ჯერ აღემატება) მზის სისტემის მთლიანი მასის 99,86%-ს მოიცავს.[14] ქიმიურად, მზის მასის 3/4-ს წყალბადი შეადგენს, ხოლო დანარჩენი უმეტესად ჰელიუმია. დარჩენილი 1,69% (რომელიც დედამიწის მასას 5600-ჯერ აღემატება) მოიცავს მძიმე ელემენტებს, როგორებიცაა: ჟანგბადი, ნახშირბადი, ნეონი, რკინა და სხვა.[15]
მზე 4,568 მილიარდი წლის წინ ჩამოყალიბდა დიდ მოლეკულურ ღრუბელში არსებულ რეგიონის გრავიტაციული კოლაფსით. მატერიის უმეტესობა ცენტრში მოგროვდა, ხოლო დანარჩენი გაბრტყელდა მბრუნავ დისკოდ, რომელიც შემდგომში მზის სისტემა გახდა. ცენტრალური მასა უფრო და უფრო ცხელი და მკვრივი გახდა, საბოლოოდ კი დაიწყო თერმობირთვული სინთეზი მის ბირთვში. მიჩნეულია, რომ თითქმის ყველა ვარსკვლავი ამ პროცესის შედეგად წარმოიქმნა. მზე სპექტრული კლასით არის G ტიპის მთავარი მიმდევრობის ვარსკვლავი (G2V) და მას არაფორმალურად ყვითელ ჯუჯად მოიხსენიებენ, რადგან მისი ხილული გამოსხივება სპექტრის ყვითელ-მწვანე ნაწილშია ყველაზე ინტენსიური. მიუხედავად იმისა, რომ სინამდვილეში იგი თეთრი ფერისაა, დედამიწის ზედაპირიდან ყვითელი ჩანს ატმოსფეროს მიერ ლურჯი სინათლის გაფანტვის გამო.[18] სპექტრული კლასის მიხედვით, G2 მიუთითებს ზედაპირის ტემპერატურას (დაახ. 5505°C) და V მიუთითებს, რომ მზე, სხვა ვარსკვლავების მსგავსად, მთავარი მიმდევრობის ვარსკვლავია და, აქედან გამომდინარე, ენერგიას წარმოქმნის წყალბადის ჰელიუმად სინთეზით. მზე თავის ბირთვში 620 მილიონი ტონა წყალბადის სინთეზს ახდენს წამში.
      </p>
      : null
    }
    <hr />
  </div>
</div>
</div>

)}

