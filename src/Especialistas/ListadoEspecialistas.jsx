import React, { useState, useEffect } from 'react';
import { gql, useSubscription, useQuery } from "@apollo/client";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";

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

const doctorColumns = [
  { key: "fullName", label: "Nombre Completo" },
  { key: "specialty", label: "Especialidad" },
  { key: "atentionHours", label: "Horario de Atención" },
  { key: "atentionDays", label: "Días de Atención" },
];

function Doctors() {
  const { data: queryData, loading: queryLoading, error: queryError } = useQuery(ALL_DOCTORS);
  const { data: subscriptionData } = useSubscription(DOCTOR_CREATED);
  
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (queryData) {
      // Combinar nombre y apellido
      const combinedDoctors = queryData.allDoctors.map(doctor => ({
        ...doctor,
        fullName: `${doctor.name} ${doctor.lastName}`
      }));
      setDoctors(combinedDoctors);
    }
  }, [queryData]);

  useEffect(() => {
    if (subscriptionData) {
      // Combinar nombre y apellido para nuevos doctores
      const newDoctor = {
        ...subscriptionData.doctorCreated,
        fullName: `${subscriptionData.doctorCreated.name} ${subscriptionData.doctorCreated.lastName}`
      };
      setDoctors(prevDoctors => [...prevDoctors, newDoctor]);
    }
  }, [subscriptionData]);

  if (queryLoading) return <p>Loading...</p>;
  if (queryError) return <p>Error: {queryError.message}</p>;

  return (
    <Table aria-label="Table of doctors" >
      <TableHeader columns={doctorColumns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={doctors}>
        {(item) => (
          <TableRow key={item.fullName}>
            {(columnKey) => {
              if (columnKey === "atentionDays") {
                return (
                  <TableCell>
                    {item[columnKey].map((day, index) => (
                      <Chip key={index} variant='flat' className='mx-1'>{day}</Chip>
                    ))}
                  </TableCell>
                );
              } else {
                return <TableCell>{item[columnKey]}</TableCell>;
              }
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default Doctors;
