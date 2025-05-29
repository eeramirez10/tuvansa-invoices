

export const Welcome = ({ totalInvoices }: { totalInvoices: number }) => {
  return (

    <section className='mb-10'>
      <div className='bg-gradient-to-r  from-yellow-400 to-yellow-500 rounded-xl  p-6 shadow-lg text-white'>
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Bienvenido, <span id="client-name">Cliente DISTRIBUIDORA MEXICANA SA DE CV</span></h2>
            <p className="mb-4">Aquí puedes descargar todas tus facturas electrónicas</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <p className="text-sm opacity-80">Facturas disponibles</p>
            <p className="text-xl font-bold">{totalInvoices}</p>
          </div>
        </div>
      </div>

    </section>

  )
}
