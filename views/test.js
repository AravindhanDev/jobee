<div class="modal-body">
	<p style="font-weight: 600; text-align: center; font-size: 1.2rem">
		Education
	</p>
	<div class="row">
		<p style="font-weight: 500">Graduation status</p>
		<div class="col-lg-6">
			<input
				type="radio"
				class="largeradio"
				name="selection"
				id="pursuing"
				checked
			/>
			&nbsp;
			<label for="pursuing">Pursuing</label>
		</div>
		<div class="col-lg-6">
			<input type="radio" class="largeradio" name="selection" id="complete" />
			&nbsp;
			<label for="complete">Completed</label>
		</div>
		<div class="col-lg-12 mt-4">
			<div class="form-group">
				<label for="educollege" style="font-weight: 500">
					College
				</label>
				<input
					type="text"
					class="form-control"
					id="educollege"
					placeholder="e.g. Jamal College"
				/>
				<div class="form-text d-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-exclamation-circle"
						viewBox="0 0 16 16"
					>
						<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
						<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
					</svg>
					&nbsp; This field is required
				</div>
			</div>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="edudegree" style="font-weight: 500">
				Degree
			</label>
			<select id="edudegree" class="form-select">
				<option>Under Graduation</option>
				<option>Post Graduation</option>
				<option>PhD</option>
				<option>Diploma</option>
				<option>Senior Secondary (XII)</option>
				<option>Secondary (X)</option>
			</select>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="edustream" style="font-weight: 500">
				Stream
			</label>
			<input
				type="text"
				class="form-control"
				id="edustream"
				placeholder="e.g. Computer Application"
			/>
		</div>
		<div class="col-lg-12 d-none mt-4">
			<label for="educomplete" style="font-weight: 500">
				Year of completion
			</label>
			<select id="educomplete" class="form-select">
				<option>2022</option>
				<option>2021</option>
				<option>2020</option>
				<option>2019</option>
				<option>2018</option>
				<option>2017</option>
				<option>2016</option>
				<option>2015</option>
				<option>2014</option>
				<option>2013</option>
				<option>2012</option>
				<option>2011</option>
				<option>2010</option>
				<option>2009</option>
				<option>2008</option>
				<option>2007</option>
				<option>2006</option>
				<option>2005</option>
				<option>2004</option>
				<option>2003</option>
				<option>2002</option>
				<option>2001</option>
				<option>2000</option>
			</select>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="edustartyear" style="font-weight: 500">
				Start year
			</label>
			<select id="edustartyear" class="form-select">
				<option>2023</option>
				<option>2022</option>
				<option>2021</option>
				<option>2020</option>
				<option>2019</option>
				<option>2018</option>
				<option>2017</option>
				<option>2016</option>
				<option>2015</option>
				<option>2014</option>
				<option>2013</option>
				<option>2012</option>
				<option>2011</option>
				<option>2010</option>
				<option>2009</option>
				<option>2008</option>
				<option>2007</option>
				<option>2006</option>
				<option>2005</option>
				<option>2004</option>
				<option>2003</option>
				<option>2002</option>
				<option>2001</option>
				<option>2000</option>
			</select>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="eduendyear" style="font-weight: 500">
				End year
			</label>
			<select id="eduendyear" class="form-select">
				<option>2023</option>
				<option>2022</option>
				<option>2021</option>
				<option>2020</option>
				<option>2019</option>
				<option>2018</option>
				<option>2017</option>
				<option>2016</option>
				<option>2015</option>
				<option>2014</option>
				<option>2013</option>
				<option>2012</option>
				<option>2011</option>
				<option>2010</option>
				<option>2009</option>
				<option>2008</option>
				<option>2007</option>
				<option>2006</option>
				<option>2005</option>
				<option>2004</option>
				<option>2003</option>
				<option>2002</option>
				<option>2001</option>
				<option>2000</option>
			</select>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="edumarktype" style="font-weight: 500">
				Performance Scale
			</label>
			<select id="edumarktype" class="form-select">
				<option>CGPA</option>
				<option>Percentage</option>
			</select>
		</div>
		<div class="col-lg-6 mt-4">
			<label for="edumark" style="font-weight: 500">
				Performance{" "}
			</label>
			<input type="text" class="form-control" id="edumark" placeholder="0.00" />
		</div>
		<div
			class="col-lg-12 mt-4"
			style="display: flex; justify-content: flex-end"
		>
			<button class="btn btn-violet" id="eduAddBtn">
				Save
			</button>
		</div>
	</div>
</div>;
