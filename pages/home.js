import Head from 'next/head'

export default function HomePage() {
    return (
        <div>
            <div className='flex justify-center pt-4'>
                <table className="table-auto border-collapse border-2 text-center border-black/30 w-[95%]">
                    <thead>
                        <tr>
                            <th className="border border-black/30">No.</th>
                            <th className="border border-black/30">Collector</th>
                            <th className="border border-black/30">Total</th>
                        </tr>
                    </thead >
                    <tbody>
                        <tr>
                            <td className="border border-black/30">1</td>
                            <td className="border border-black/30">Jk</td>
                            <td className="border border-black/30">
                                1
                            </td>
                        </tr >
                        <tr>
                            <td className="border border-black/30">1</td>
                            <td className="border border-black/30">Jk</td>
                            <td className="border border-black/30">
                                1
                            </td>
                        </tr >
                        <tr>
                            <td className="border border-black/30">1</td>
                            <td className="border border-black/30">Jk</td>
                            <td className="border border-black/30">
                                1
                            </td>
                        </tr >
                        <tr>
                            <td className="border border-black/30">1</td>
                            <td className="border border-black/30">Jk</td>
                            <td className="border border-black/30">
                                1
                            </td>
                        </tr >
                        <tr>
                            <td className="border border-black/30">1</td>
                            <td className="border border-black/30">Jk</td>
                            <td className="border border-black/30">
                                1
                            </td>
                        </tr >
                    </tbody >
                    <thead>
                        <tr>
                            <th className="border border-black/30">No.</th>
                            <th className="border border-black/30">Combined Total</th>
                            <th className="border border-black/30">Total</th>
                        </tr>
                    </thead >
                </table >
            </div >
            <div className=''>
                <div className='flex justify-center items-center pt-4'>
                    <label htmlFor="noc"><b>Name of Collector</b> :- </label>
                    <select className='w-28 py-1 text-center' id="cars" name='noc'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className='flex justify-center pt-4 items-center'>
                    <label htmlFor="quantity"><b>Quantity</b> :- </label>
                    <input className='w-28 text-center py-1' type="number" id="quantity" name='quantity' placeholder='weight in Kg' min="0" max="50" />
                </div>
                <div className='flex justify-center pt-4 items-center'>
                    <button className='w-48 py-1 px-4 bg-black text-green-400'>ADD WEIGHT</button>
                </div>
            </div>
        </div>
    )
}
