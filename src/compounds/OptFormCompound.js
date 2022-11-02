import React from "react";
import OptFormWrapper from "../components/OptForm/OptFormWrapper";
import OptFormText from "../components/OptForm/OptFormText";
import OptFormEmail from "../components/OptForm/OptFormEmail";
import OptFormButton from "../components/OptForm/OptFormButton";

function OptFormCompound() {
  return (
    <>
      <OptFormText>
      Obtenga una plataforma robusta a la altura de las mejores del mercado.

</OptFormText>
      <OptFormWrapper>
        <OptFormEmail placeholder="Ingrese su email para mas informacion" />
        <OptFormButton>Siguiente</OptFormButton>
      </OptFormWrapper>
    </>
  );
}

export default OptFormCompound;
