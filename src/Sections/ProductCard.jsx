import React from 'react';
import Card from '../components/Card';

const ProductCard = () => {
  return (
    <>
      <div className="flex justify-between mb-8">
        <h2 className="text-4xl font-semibold">Our best properties</h2>
        <div className="flex gap-2">
          <button>
            <span class="material-symbols-outlined border-2 rounded-3xl p-1">west</span>
          </button>
          <button>
            <span class="material-symbols-outlined bg-violet-300 p-1 rounded-3xl">east</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 mb-32 gap-24 ">
        <Card
          imgURL="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          addres=" 860 Crescent St, Brooklyn, NY"
          price="$770,000"
        />
        <Card
          imgURL="https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          addres="482 Timberline Way S, Madera,CA"
          price="$770,000"
        />
        <Card
          imgURL="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          addres="567 Maple Drive,
    Los Angeles, CA"
          price="$810,000"
        />
      </div>
    </>
  );
};

export default ProductCard;
