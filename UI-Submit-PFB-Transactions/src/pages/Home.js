import React from "react";
import FormPFB from "./FormPFB";
import Result from "./Result";
import axios from "axios";
import _ from "lodash"

function Home() {
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

  const generateRandHexEncodedNamespaceID = () => {
    let nID = new Uint8Array(8);
    window.crypto.getRandomValues(nID);
    let hexString = Array.from(nID).map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hexString;
  }

  const generateRandMessage = () => {
    let lenMsg = Math.floor(Math.random() * 100);
    let msg = new Uint8Array(lenMsg);
    window.crypto.getRandomValues(msg);
    let hexString = Array.from(msg).map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hexString;
  }

  const handleGenerateNamespaceIdAndData = () => {
    const seed = Math.floor(Math.random() * 1000);
    const nId = generateRandHexEncodedNamespaceID(seed);
    const msg = generateRandMessage();

    setFormData(prev => ({...prev, namespace_id: nId, data: msg}))
  }

  return (
    <>
      {_.isEmpty(submitPfbData) ?
        <FormPFB
          formData={formData}
          onSubmit={() => submitPFB()}
          onChange={(key, value) => handleOnChange(key, value)}
          isSubmitting={isSubmitting}
          generate={() => handleGenerateNamespaceIdAndData()} />
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

export default Home;
