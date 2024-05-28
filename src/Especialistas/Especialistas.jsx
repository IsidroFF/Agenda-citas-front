import { Carousel } from "antd";
import Doctors from "./ListadoEspecialistas";
import FormRegistro from "../components/formRegistrarDoctor/FormRegistro";


export default function Especialistas() {
  return (
    <>
      <Carousel arrows infinite={false}>
        <Doctors/>
      </Carousel>
      <FormRegistro/>
    </>
  );
}