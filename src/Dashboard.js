import { DiagramBuilder } from "@data-story-org/core";
import { Create, Output } from '@data-story-org/core/lib/src/server/nodes'
import { useState } from "react";

export default ({diagram}) => {
	const [output, setOutput] = useState('Output from diagram...')
	
  const diagram2 = DiagramBuilder.begin()
			.add(Create)
			.add(Output)
			.finish()	

	diagram2.run().then(result => {
		let v = result.diagram.getOutput()
		let serialized = JSON.stringify(v)
		setOutput(serialized)
	})

  return (
		<div className="m-2">
			<textarea
				value={output}
				disabled
			/>
		</div>
  );
};