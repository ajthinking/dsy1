import { DiagramBuilder } from '@data-story-org/core';
import { Create, Output } from '@data-story-org/core/lib/src/server/nodes'
import '@data-story-org/gui/lib/styles/app.css';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Design from './Design';

function App() {
  const [page, setPage] = useState('Dashboard');
  const [diagram, setDiagram] = useState(
		DiagramBuilder.begin()
			.add(Create)
			.add(Output)
			.finish()
	);	

  return (
     <div>
			 	<div className="flex items-center justify-between bg-indigo-500 px-2 py-2 text-white font-black font-mono">
					<div className="text-2xl">DataStory</div>
					<div className="flex space-x-4">
						<div 
							className="font-semibold"
							onClick={() => {setPage('Dashboard')}}
						>dashboard</div>
						<div
							className="font-semibold"
							onClick={() => {setPage('Design')}}
						>design</div>
					</div>

				 </div>
        {page == 'Design' && <Design diagram={diagram} /> }
        {page == 'Dashboard' && <Dashboard diagram={diagram} /> }
     </div>
  );
}

export default App;