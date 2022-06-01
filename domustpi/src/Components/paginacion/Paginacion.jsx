import React from 'react';
import './Paginacion.css';
import Pagination from 'react-bootstrap/Pagination'

const Paginacion = () => {
    return (
        <>
        <Pagination className = "Pagin my-3 mx-auto justify-content-center">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis/>
        
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item active>{6}</Pagination.Item>
          <Pagination.Item>{7}</Pagination.Item>
          <Pagination.Item>{8}</Pagination.Item>
        
          <Pagination.Ellipsis />
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        </>
  );
}

export default Paginacion;
