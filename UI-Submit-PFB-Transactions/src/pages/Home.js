import React from "react";
import FormPFB from "./FormPFB";
import Result from "./Result";
import axios from "axios";
import _ from "lodash"

function SignIn() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitPfbData, setSubmitPfbData] = React.useState({})
  const [formData, setFormData] = React.useState({
    "gas_limit": 80000,
    "fee": 2000
  });

  const handleOnChange = (key, value) => {
    setFormData(prev => ({...prev, [key]: value}))
  }

  const submitPFB = () => {
    setIsSubmitting(true)
    axios.post(`${process.env.REACT_APP_API_URL}submit_pfb`, formData)
    .then(response => {
      setSubmitPfbData(response.data)
    })
    .catch(error => {
      console.log(error, "");
    });
  }

  return (
    <>
      {_.isEmpty(submitPfbData) ?
        <FormPFB onSubmit={() => submitPFB()} onChange={(key, value) => handleOnChange(key, value)} isSubmitting={isSubmitting} />
      :
        <Result
          onSubmit={() => {
            setSubmitPfbData({})
            setIsSubmitting(false)
          }}
          pfbData={submitPfbData}
          nameSpaceId={formData?.namespace_id}
        />
      }
    </>
  );
}

export default SignIn;
