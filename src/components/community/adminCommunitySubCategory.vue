<template>
	<div>
		<div class="content">
			<div class="container">	
				<div class="row">
					<div class="col-lg-12">

					<div class="category_button_top">
						<Select v-model="model1" style="width:200px" placeholder="Select Category">
					        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
					        </Option>

					    </Select>
					    <Input v-model="value" placeholder="Enter Subcatgeroy..." style="width: 220px" />
					    <button class="_btn _action_btn view_btn1 category_button" type="button">Add Subcategory</button>

					</div>

						<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="_1adminOverveiw_table_recent _box_shadow _border_radious _mar_b30 _p20">


					<div class="_overflow _table_div">
						<table class="_table">
								<!-- TABLE TITLE -->
							<tr>
								<th>Id</th>
								<th>Subcategory</th>
								<th>Category</th>		
								<th>Action</th>
							</tr>
								<!-- TABLE TITLE -->


								<!-- ITEMS -->
							<tr>
								<td>01</td>
								<td>Everyone Lounge</td>
								<td>Everyone Lounge</td>
								<td>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->
								<!-- ITEMS -->
							<tr>
								<td>01</td>
								<td>Everyone Lounge</td>
								<td>Everyone Lounge</td>
								<td>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->
								<!-- ITEMS -->
							<tr>
								<td>01</td>
								<td>Everyone Lounge</td>
								<td>Everyone Lounge</td>
								<td>
									<button class="_btn _action_btn edit_btn1" type="button">Edit</button>
									<button class="_btn _action_btn make_btn1" type="button">Delete</button>
								</td>
							</tr>
								<!-- ITEMS -->
						</table>		

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>




			