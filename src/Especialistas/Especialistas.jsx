import { Carousel } from "antd";
import Doctors from "./ListadoEspecialistas";
import FormRegistro from "../components/formRegistrarDoctor/FormRegistro";


export default function Especialistas() {
  return (
    <>
      <div className="p-20">

        <Doctors />
      </div>
      <FormRegistro />
    </>
  );
}