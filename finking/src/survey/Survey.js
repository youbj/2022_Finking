import './style.css'; //css import
import React, { useState } from 'react';

import { doc, getDoc, updateDoc, collection } from 'firebase/firestore';
import { dbService } from 'firebaseInstance';
import { useHistory } from 'react-router-dom';
import imgexit from '../img/exit.png';

const Survey = ({ userObj }) => {
  const [values, setValues] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();
  const [form, setForm] = useState({
    age: '10`s',
    balance: 'low',
    minus: 'zero',
    income: '1000',
    debt: '1000',
    ratio: 'row',
    exp: 'zero',
    structure: 'zero',
    purpose: 'financial',
    period: 'oneday',
    industry: 'electronic',
    industry2: 'electronic',
    country: 'korea',
    check: '0',
  });

  const Setusermind = async () => {
    let age = '0';
    let balance = '0';
    let minus = '0';
    let income = '0';
    let debt = '0';
    let ratio = '0';
    let exp = '0';
    let purpose = '0';
    let structure = '0';
    let period = '0';
    let industry = '0';
    let industry2 = '0';
    let country = '0';
    let check = '0';
    let code = '0';

    if (form.age === '10`s') age = '1';
    else if (form.age === '20`s') age = '2';
    else if (form.age === '30`s') age = '3';
    else if (form.age === '40`s') age = '4';
    else if (form.age === '50`s') age = '5';
    else if (form.age === '60`s') age = '6';
    else age = '-1';

    if (form.balance === 'low') balance = '1';
    else if (form.balance === 'lowreturn') balance = '2';
    else if (form.balance === 'middle') balance = '3';
    else if (form.balance === 'middlehigh') balance = '4';
    else if (form.balance === 'highreturn') balance = '5';
    else balance = '-1';

    if (form.minus === 'zero') minus = '1';
    else if (form.minus === '5per') minus = '2';
    else if (form.minus === '10per') minus = '3';
    else if (form.minus === 'nothing') minus = '4';
    else minus = '-1';

    if (form.income === '1000') income = '1';
    else if (form.income === '3000under') income = '2';
    else if (form.income === '5000under') income = '3';
    else if (form.income === '5000over') income = '4';
    else income = '-1';

    if (form.debt === '1000') debt = '1';
    else if (form.debt === '3000under') debt = '2';
    else if (form.debt === '5000under') debt = '3';
    else if (form.debt === '5000over') debt = '4';
    else debt = '-1';

    if (form.ratio === 'row') ratio = '1';
    else if (form.ratio === 'lesshalf') ratio = '2';
    else if (form.ratio === 'half') ratio = '3';
    else if (form.ratio === 'morehalf') ratio = '4';
    else if (form.ratio === 'all') ratio = '5';
    else ratio = '-1';

    if (form.exp === 'zero') exp = '1';
    else if (form.exp === '1year') exp = '2';
    else if (form.exp === '1_3year') exp = '3';
    else if (form.exp === '3year_over') exp = '4';
    else exp = '-1';

    if (form.structure === 'zero') structure = '1';
    else if (form.structure === 'less') structure = '2';
    else if (form.structure === 'more') structure = '3';
    else if (form.structure === 'all') structure = '4';
    else structure = '-1';

    if (form.purpose === 'financial') purpose = '1';
    else if (form.purpose === 'living') purpose = '2';
    else if (form.purpose === 'spare') purpose = '3';
    else if (form.purpose === 'growth') purpose = '4';
    else purpose = '-1';

    if (form.period === 'oneday') period = '1';
    else if (form.period === '1year') period = '2';
    else if (form.period === '2year') period = '3';
    else if (form.period === 'long') period = '4';
    else period = '-1';

    if (form.industry === 'electronic') industry = '1';
    else if (form.industry === 'medical') industry = '2';
    else if (form.industry === 'chemistry') industry = '3';
    else if (form.industry === 'communication') industry = '4';
    else if (form.industry === 'finance') industry = '5';
    else if (form.industry === 'car') industry = '6';
    else if (form.industry === 'construction') industry = '7';
    else if (form.industry === 'insurance') industry = '8';
    else if (form.industry === 'it') industry = '9';
    else if (form.industry === 'food') industry = '0';
    else industry = '-1';

    if (form.industry2 === 'electronic') industry2 = '1';
    else if (form.industry2 === 'medical') industry2 = '2';
    else if (form.industry2 === 'chemistry') industry2 = '3';
    else if (form.industry2 === 'communication') industry2 = '4';
    else if (form.industry2 === 'finance') industry2 = '5';
    else if (form.industry2 === 'car') industry2 = '6';
    else if (form.industry2 === 'construction') industry2 = '7';
    else if (form.industry2 === 'insurance') industry2 = '8';
    else if (form.industry2 === 'it') industry2 = '9';
    else if (form.industry2 === 'food') industry2 = '0';
    else industry2 = '-1';

    if (form.country === 'korea') country = '1';
    else if (form.country === 'usa') country = '2';
    else if (form.country === 'all') country = '3';
    else country = '-1';

    code = `${age}${balance}${minus}${income}${debt}${ratio}${exp}${purpose}${structure}${period}${industry}${industry2}${country}`;

    await updateDoc(doc(dbService, 'user', userObj.email), {
      usercode: code,
    });
    onClickprofile();
  };
  const onClickprofile = () => {
    history.push('/');
  };

  const hadleChange = (e) => {
    const { name, values } = e.target;
    setForm({
      ...form,
      [name]: e.target.value,
    });
    console.log(e.target.value);
    console.log(form);
  };

  return (
    <>
      <div className="wrap">
        <div>
          <h1 className="surveytext_Logo" style={{ display: 'inline' }}>
            Finking Survey
          </h1>
          <img
            src={imgexit}
            width="30"
            height="30"
            onClick={onClickprofile}
            style={{
              display: 'inline',
              marginTop: 25,
              marginLeft: 450,
            }}
          />
        </div>

        <form className="flex" style={{ marginTop: 60 }}>
          <p className="surveytext">
            <label>1. ????????? ???????????? ??????????????????. </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input type="radio" name="age" value="10`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                10???
              </label>
            </div>
            <div className="survey_div">
              <input type="radio" name="age" value="20`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                20???
              </label>
            </div>
            <div className="survey_div">
              <input type="radio" name="age" value="30`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                30???
              </label>
            </div>
            <div className="survey_div">
              <input type="radio" name="age" value="40`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                40???
              </label>
            </div>
            <div className="survey_div">
              <input type="radio" name="age" value="50`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                50???
              </label>
            </div>
            <div className="survey_div">
              <input type="radio" name="age" value="60`s" className="radio" />
              <label htmlFor="10`s" className="nanum">
                60??? ??????
              </label>
            </div>
          </div>

          <p className="surveytext">
            <label>
              2. ????????? ??? ??????????????? ????????? ????????? ???????????? ?????? ??????????????????{' '}
            </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input
                type="radio"
                name="balance"
                value="low"
                className="radio"
              />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="balance"
                value="lowreturn"
                className="radio"
              />
              ???????????? ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="balance"
                value="middle"
                className="radio"
              />
              ????????? ?????? ????????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="balance"
                value="middlehigh"
                className="radio"
              />
              ???????????? ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="balance"
                value="highreturn"
                className="radio"
              />
              ?????? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>
              3. ????????? ??? ????????? ??????????????? ?????? ?????? ?????? ??? ?????????{' '}
            </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              {' '}
              <input type="radio" name="minus" value="zero" className="radio" />
              X
            </div>
            <div className="survey_div">
              <input type="radio" name="minus" value="5per" className="radio" />
              5%
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="minus"
                value="10per"
                className="radio"
              />
              10%
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="minus"
                value="nothing"
                className="radio"
              />
              ????????????
            </div>
          </div>

          <p className="surveytext">
            <label>4. ?????? ????????? ?????? ??????????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="income"
                value="1000"
                className="radio"
              />
              1000?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="income"
                value="3000under"
                className="radio"
              />
              1000?????? ~ 3000??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="income"
                value="5000under"
                className="radio"
              />
              3000?????? ~ 5000??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="income"
                value="5000over"
                className="radio"
              />
              5000?????? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>5. ???????????? ????????? ?????? ??????????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input type="radio" name="debt" value="1000" className="radio" />
              1000?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="debt"
                value="3000under"
                className="radio"
              />
              1000?????? ~ 3000??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="debt"
                value="5000under"
                className="radio"
              />
              3000?????? ~ 5000??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="debt"
                value="5000over"
                className="radio"
              />
              5000?????? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>6. ????????? ????????? ????????? ?????? ?????? ????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input type="radio" name="ratio" value="row" className="radio" />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="ratio"
                value="lesshalf"
                className="radio"
              />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input type="radio" name="ratio" value="half" className="radio" />
              ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="ratio"
                value="morehalf"
                className="radio"
              />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input type="radio" name="ratio" value="all" className="radio" />
              ?????? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>7. ???????????? ????????? ???????????? ????????? ???????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input type="radio" name="exp" value="zero" className="radio" />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input type="radio" name="exp" value="1year" className="radio" />
              1??? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="exp"
                value="1_3year"
                className="radio"
              />
              1???~3???
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="exp"
                value="3year_over"
                className="radio"
              />
              3??? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>
              8. ???????????? ????????? ??????????????? ??????, ????????? ?????? ???????????? ?????????????{' '}
            </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input
                type="radio"
                name="structure"
                value="zero"
                className="radio"
              />
              ?????????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="structure"
                value="less"
                className="radio"
              />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="structure"
                value="more"
                className="radio"
              />
              ?????? ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="structure"
                value="all"
                className="radio"
              />
              ????????? ?????? ????????????
            </div>
          </div>

          <p className="surveytext">
            <label>9. ?????? ????????? ????????? ???????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="purpose"
                value="financial"
                className="radio"
              />
              ????????????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="purpose"
                value="living"
                className="radio"
              />
              ?????????, ?????? ??? ????????????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="purpose"
                value="spare"
                className="radio"
              />
              ????????????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="purpose"
                value="growth"
                className="radio"
              />
              ?????? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>10. ?????? ?????? ????????? ????????? ????????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input
                type="radio"
                name="period"
                value="oneday"
                className="radio"
              />
              ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="period"
                value="1year"
                className="radio"
              />
              1???
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="period"
                value="2year"
                className="radio"
              />
              2???
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="period"
                value="long"
                className="radio"
              />
              ??? ??????
            </div>
          </div>

          <p className="surveytext">
            <label>11. ?????? ???????????? ????????? ?????????? 1??????</label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="industry"
                value="electronic"
                className="radio"
              />
              ????????????(????????????, LG, SK)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="medical"
                className="radio"
              />
              ??????(?????? ?????????, ????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="chemistry"
                className="radio"
              />
              ??????(LG??????, SK???????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="communication"
                className="radio"
              />
              ??????(SK?????????, KT)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="finance"
                className="radio"
              />
              ??????(??????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="car"
                className="radio"
              />
              ?????????(KIA, ??????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="construction "
                className="radio"
              />
              ?????????(????????????, ????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="insurance"
                className="radio"
              />
              ??????(????????????, ????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry"
                value="it"
                className="radio"
              />
              IT(?????????, ?????????, ????????????)
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="industry"
                value="food"
                className="radio"
              />
              ????????????(CJ????????????, ??????, ???????????????)
            </div>
          </div>

          <p className="surveytext">
            <label>12. ?????? ???????????? ????????? ?????????? 2??????</label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="electronic"
                className="radio"
              />
              ????????????(????????????, LG, SK)
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="industry2"
                value="medical"
                className="radio"
              />
              ??????(?????? ?????????, ????????????)
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="industry2"
                value="chemistry"
                className="radio"
              />
              ??????(LG??????, SK???????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="communication"
                className="radio"
              />
              ??????(SK?????????, KT)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="finance"
                className="radio"
              />
              ??????(??????)
            </div>
            <div className="survey_div">
              {' '}
              <input
                type="radio"
                name="industry2"
                value="car"
                className="radio"
              />
              ?????????(KIA, ??????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="construction"
                className="radio"
              />
              ?????????(????????????, ????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="insurance"
                className="radio"
              />
              ??????(????????????, ????????????)
            </div>
            <div className="survey_div"></div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="it"
                className="radio"
              />
              IT(?????????, ?????????, ????????????)
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="industry2"
                value="food"
                className="radio"
              />
              ????????????(CJ????????????, ??????, ???????????????)
            </div>
          </div>

          <p className="surveytext">
            <label>13. ?????? ????????? ?????? ???????????? ????????? ?????????? </label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input
                type="radio"
                name="country"
                value="korea"
                className="radio"
              />
              ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="country"
                value="usa"
                className="radio"
              />
              ??????
            </div>
            <div className="survey_div">
              <input
                type="radio"
                name="country"
                value="all"
                className="radio"
              />
              ????????????
            </div>
          </div>

          <p className="surveytext">
            <label>??? ???????????????????</label>
          </p>
          <div
            className="survey"
            name={name}
            value={values}
            onChange={hadleChange}
          >
            <div className="survey_div">
              <input type="radio" name="check" value="1" className="radio" />???
            </div>
            <div className="survey_div">
              <input type="radio" name="check" value="0" className="radio" />
              ?????????
            </div>
          </div>
          <div style={{ marginLeft: 200, marginTop: 100, marginBottom: 30 }}>
            <input
              type="button"
              value={'Summit'}
              onClick={Setusermind}
              className="save"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Survey;
