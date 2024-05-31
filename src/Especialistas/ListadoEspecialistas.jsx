import React, { useState, useEffect } from 'react';
import { gql, useSubscription, useQuery } from "@apollo/client";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const ALL_DOCTORS = gql`
  query AllDoctors {
    allDoctors {
      name
      lastName
      specialty
      atentionHours
      atentionDays
    }
  }
`;

const DOCTOR_CREATED = gql`
  subscription DoctorCreated {
    doctorCreated {
      name
      lastName
      specialty
      atentionHours
      atentionDays
    }
  }
`;

function Doctors() {
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(ALL_DOCTORS);
  const { data: subscriptionData } = useSubscription(DOCTOR_CREATED);
  
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (queryData) {
      setDoctors(queryData.allDoctors);
    }
  }, [queryData]);

  useEffect(() => {
    if (subscriptionData) {
      setDoctors(prevDoctors => [...prevDoctors, subscriptionData.doctorCreated]);
    }
  }, [subscriptionData]);

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error: {queryError.message}</p>;

  return (
    <div className='flex m-6 gap-4 h-96'>
      {doctors.map((doctor, index) => (
        <Card key={index} className="py-4">
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
