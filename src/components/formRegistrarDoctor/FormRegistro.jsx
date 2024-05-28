import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { MailIcon } from '../icons/MailIcon.jsx';
import { Name } from "../icons/Name.jsx";
import { getClient } from "../../lib/client.jsx";
import { gql } from "@apollo/client";

export default function FormRegistro() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [correo, setCorreo] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [especialidad, setEspecialidad] = React.useState("");
  const [idProfesional, setIdProfesional] = React.useState("");
  const [consultorio, setConsultorio] = React.useState("");
  const [diasAtencion, setDiasAtencion] = React.useState(new Set([]));
  const [horasAtencion, setHorasAtencion] = React.useState("");
  const [genero, setGenero] = React.useState("");

  const handleSelectionChange = (e) => {
    setGenero(e.target.value);
  };

  const handleDiasAtencionChange = (e) => {
    setDiasAtencion(new Set(e.target.value.split(",")));
  };
  const handleAddDoctor = async () => {
    console.log(diasAtencion);
    try {
      const { data } = await getClient().mutate({
        mutation: gql`
          mutation Mutation($name: String!, $lastName: String!, $gender: String!, $phone: String!, $email: String!, $specialty: String!, $professionalId: String!, $office: String!, $atentionDays: [String!]!, $atentionHours: String!) {
            addDoctor(name: $name, lastName: $lastName, gender: $gender, phone: $phone, email: $email, specialty: $specialty, professionalID: $professionalId, office: $office, atentionDays: $atentionDays, atentionHours: $atentionHours) {
              name
              lastName
              atentionDays
              atentionHours
              email
              gender
              office
              phone
              professionalID
              specialty
            }
          }
        `,
        variables: {
          name: nombre,
          lastName: apellido,
          gender: genero,
          phone: telefono,
          email: correo,
          specialty: especialidad,
          professionalId: idProfesional,
          office: consultorio,
          atentionDays: Array.from(diasAtencion).join(", "),
          atentionHours: horasAtencion,
        }
      });
      console.log('Doctor added:', data.addDoctor);
      onOpenChange(false);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="flat">Añadir Doctor</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Registrar Dentista</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <Name className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Nombre"
                  placeholder="Ingresa tu nombre"
                  variant="bordered"
                  isRequired
                  value={nombre}
                  onValueChange={setNombre}
                />
                <Input
                  label="Apellido"
                  placeholder="Ingresa tu apellido"
                  variant="bordered"
                  isRequired
                  value={apellido}
                  onValueChange={setApellido}
                />
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Correo"
                  type="email"
                  isRequired
                  placeholder="Ingresa tu correo"
                  variant="bordered"
                  value={correo}
                  onValueChange={setCorreo}
                />
                <Input
                  label="Teléfono"
                  placeholder="Ingresa tu teléfono"
                  variant="bordered"
                  isRequired
                  value={telefono}
                  onValueChange={setTelefono}
                />
                <Input
                  label="Especialidad"
                  placeholder="Ingresa tu especialidad"
                  variant="bordered"
                  isRequired
                  value={especialidad}
                  onValueChange={setEspecialidad}
                />
                <Input
                  label="ID Profesional"
                  placeholder="Ingresa tu ID profesional"
                  variant="bordered"
                  isRequired
                  value={idProfesional}
                  onValueChange={setIdProfesional}
                />
                <Input
                  label="Consultorio"
                  placeholder="Ingresa tu consultorio"
                  variant="bordered"
                  isRequired
                  value={consultorio}
                  onValueChange={setConsultorio}
                />
                <Select
                  label="Días de atención"
                  variant="bordered"
                  isRequired
                  selectionMode="multiple"
                  selectedKeys={diasAtencion}
                  onChange={handleDiasAtencionChange}
                >
                  <SelectItem key='Lunes' value='Lunes'>Lunes</SelectItem>
                  <SelectItem key='Martes' value='Martes'>Martes</SelectItem>
                  <SelectItem key='Miércoles' value='Miércoles'>Miércoles</SelectItem>
                  <SelectItem key='Jueves' value='Jueves'>Jueves</SelectItem>
                  <SelectItem key='Viernes' value='Viernes'>Viernes</SelectItem>
                  <SelectItem key='Sábado' value='Sábado'>Sábado</SelectItem>
                  <SelectItem key='Domingo' value='Domingo'>Domingo</SelectItem>
                </Select>
                <Input
                  label="Horas de atención"
                  placeholder="Ingresa las horas de atención"
                  variant="bordered"
                  isRequired
                  value={horasAtencion}
                  onValueChange={setHorasAtencion}
                />
                <Select
                  label="Género"
                  variant="bordered"
                  isRequired
                  onChange={handleSelectionChange}
                >
                  <SelectItem key='Femenino' value='Femenino'>Femenino</SelectItem>
                  <SelectItem key='Masculino' value='Masculino'>Masculino</SelectItem>
                  <SelectItem key='NA' value='No especificado'>Prefiero no responder</SelectItem>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleAddDoctor}>
                  Registrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
