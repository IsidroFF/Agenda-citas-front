import React, { useState, useEffect } from 'react';
import { getClient } from "../lib/client.jsx";
import { gql, useSubscription } from "@apollo/client";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const DOCTOR_CREATED = gql`
    subscription DoctorCreated {
      doctorCreated{
        name
        lastName
        specialty
        atentionHours
        atentionDays
      }
    }
  `

  const {data, loading} = useSubscription(
    DOCTOR_CREATED,
    {
      onData: (data)=>{
        console.log(data);
      }
    }
  )

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await getClient().query({
          query: gql`
            query AllDoctors {
              allDoctors {
                name
                lastName
                specialty
                atentionHours
                atentionDays
              }
            }
          `
        });
        setDoctors(data.allDoctors);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='flex m-6 gap-4 h-96'>
      {doctors.map(doctor => (
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{doctor.atentionHours}</p>
            <small className="text-default-500">{doctor.specialty}</small>
            <h4 className="font-bold text-large">{doctor.name + ' ' + doctor.lastName}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/generic profile doctor.png"
              width={200}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Doctors;
