import '../css/ArticleEa.css';
import imgfor from "../img/imgforrex_optimized.png";
import Navbar from "../component/navbar";
import Footers from '../component/footter';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';



function ArticleEa() {
  const { Title, Paragraph, Text } = Typography;

  return (
    <div>
      <Navbar></Navbar>
      <div className="ArticleEa">
        <div className="landingpage">
          <h1 className='headboldtext'> EA Forex คืออะไร?</h1>
          <div className='container1'>
            <img className="imgforrex" src={imgfor} alt="" />
            <Paragraph className='slimtext'>สำหรับนักเทรดที่เป็นมือเก่าแล้วคิดว่าน่าจะรู้จักคำว่า EA คำที่ย่อมาจาก Expert Advisors มันเอาไว้ใช้เป็นโปรแกรมช่วยเทรดที่มีความสามารถในการเปิด/ปิดออเดอร์ได้ตามสูตรหรือตามเงื่อนไข ที่นักเขียนโปรแกรมได้เขียนเอาไว้ ความสามารถหรือความเก่งของ EA ขึ้นอยู่กับสูตรที่นักเขียนโปรแกรมกำหนด EA บางตัวสามารถคำนวณ lot size โดยตั้งค่าอัตราความเสี่ยง ตั้งค่าออเดอร์ล่วงหน้า กำหนดเวลาซื้อขายและคำนวณอัตราความเสี่ยงในการเทรดได้อีกด้วย</Paragraph>
          </div>

          <Typography className='textbox1'>
          <Title level={2} >โปรแกรม EA Forex ใช้งานยังไง? และทำกำไรได้จริงหรือไม่?</Title>
          <Paragraph className='slimtext'>
          โปรแกรมเทรดที่รับรองการติดตั้ง EA Forex ที่ทั่วโลกนิยมใช้นั้น ก็คือ Metatrader 4 หรือเรียกสั้นๆ ว่า MT4 เมื่อเราทำการติดตั้งโปรแกรม EA ลงใน MT4 แล้ว เราก็จะสามารถสั่งให้ EA ทำงานได้ มันจะทำงานได้ก็ต่อเมื่อเปิดโปรแกรมไว้เท่านั้น ถ้าหากว่าเราปิดโปรแกรม MT4 ตัว EA ก็จะถูกปิดการทำงานไปด้วย
          </Paragraph>
          <Paragraph className='slimtext'>
          การใช้โปรแกรม EA สามารถทำกำไรได้จริง แต่มันก็เทรดขาดทุนได้เช่นกัน ขึ้นอยู่กับว่าเราประเมินผลงานของมันด้วยระยะเวลานานเท่าไหร่ (สัปดาห์ , เดือน , ปี) และปัจจัยส่วนหนึ่งที่ส่งผลกับประสิทธิภาพการทำงานของ EA ก็คือ การตั้งค่าการทำงาน เพราะ EA Forex บางตัวออกแบบมาตามเงื่อนไขที่ต้องการเงินทุนจำนวนที่มากพอ หรือทำการเทรดได้ดีเฉพาะบางคู่เงินเท่านั้น ดังนั้นก่อนที่จะนำ EA มาใช้งาน ต้องอ่านคู่มือการใช้งานและการติดตั้งให้ละเอียดก่อนว่าโปรแกรม EA มีการตั้งค่ายังไง มีการเทรดคู่ไหน ใช้เงินทุนเป็นจำนวนเท่าไหร่ ถ้าจะให้ดี backtest ก่อนที่จะนำมาใช้งาน
          </Paragraph>

          <Title level={2} >โปรแกรม EA Forex ใช้งานยังไง? และทำกำไรได้จริงหรือไม่?</Title>
          <Paragraph className='slimtext'>
          ก่อนที่จะนำโปรแกรม EA มาใช้งานจริง ผู้ใช้งานจะต้องตรวจสอบประสิทธิภาพของ EA ด้วยวิธีการ <Text underline>Back Test </Text> 
          หรือ การจำลองการ ทำงานของ EA จากกราฟในอดีต เพื่อวัดผลว่าระบบทำงานเป็นอย่างไร มีการเปิดหรือปิด ออเดอร์ได้มากน้อยแค่ไหน มีกำไรขาดทุนเป็นอย่างไรกำไรขาดทุนเป็นเท่าไหร่ ผลลัพธ์ที่ได้ เราก็จะประเมินคุณภาพของ EA ได้พอสมควร
          </Paragraph>
          <Paragraph className='slimtext'>
          การนำโปรแกรม EA ไปใช้จริงผู้ใช้เอง ก็ควรเข้าไปดูพอร์ตตัวเองบ้าง ถ้าดูแล้วได้กำไรมากพอ ก็ควรสั่งให้โปรแกรม EA หยุดทำงาน ถอดทุนหรือกำไรบางส่วน และแบ่งทุนอีกส่วนหนึ่งทำการเทรดต่อก็จะปลอดภัยกว่า
          </Paragraph>

          <Title level={2} >ตัวอย่างโปรแกรม EA Forex</Title>
          <span  className='texttitle_color'> <Link to='/EaProduct'>Buffet EA </Link></span> 
          <span className='texttitle_back'>เป็น EA ที่ถูกคิดค้นและออกแบบมาเพื่อเทรดเดอร์มือใหม่ที่ต้องการตัวช่วยในการวิเคราะห์แนวโน้มตลาด สามารถช่วยออกออร์เดอร์ได้หลากหลาย สามารถ Backtest และเปิดระบบ Auto Trade ได้อีกด้วย</span>


          </Typography>

        </div>

        <section>
          <Footers></Footers>
        </section>
      </div>
    </div>
  );
}

export default ArticleEa;
