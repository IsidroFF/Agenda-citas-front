import React from "react";
import {
  Card, CardHeader, CardBody, Image
} from "@nextui-org/react";
import "../App.css"
import Users from "../Users.jsx";

export default function Inicio() {
  return (
    <>
      <section id="fondo">
        <div className="w-1/2 p-4 flex flex-col -space-y-80">
          <h1 className="text-8xl py-60 font-bold pl-16">Lorem ipsum dolor sit.</h1>
          <h2 className="text-2xl py-40 pl-16 w-4/5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aut culpa, sed perspiciatis atque ipsum illum? Dignissimos doloremque fugiat eaque itaque, modi quod at suscipit illo, impedit, praesentium minus cupiditate?</h2>
        </div>
      </section>
      <section className="h-screen block">
        <h1 className="text-3xl pt-40 pb-10 font-bold pl-16">Encuentra al mejor especialista que se adapte a tus necesidades</h1>
        <section className="flex space-x-12 p-4 justify-center ">
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Ortodoncia</p>
                <small className="text-default-500">Exp: 12 años</small>
                <h4 className="font-bold text-large">Dra. Laura Méndez</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/2.png"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Endodoncia</p>
                <small className="text-default-500">Exp: 8 años</small>
                <h4 className="font-bold text-large">Dr. Javier Ruiz</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/4.png"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Periodoncia</p>
                <small className="text-default-500">Exp: 10 años</small>
                <h4 className="font-bold text-large">Dra. Sofía Castillo</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/3.png"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Odontopediatría</p>
                <small className="text-default-500">Exp: 7 años</small>
                <h4 className="font-bold text-large">Dr. Manuel Gómez</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/5.png"
                  width={270}
                />
              </CardBody>
            </Card>
          </div>
        </section>
      </section>

      <Users />
    </>
  );
}
