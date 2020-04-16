<template>
	<div>
		<div class="content">
			<div class="container">	
				<div class="col-md-9">
						<div class="post_right">
							<div class="row">
								<div class="col-md-12">
									<div class="category_title_area post_category_title _border_color">
										<h2 class="category_title">Write a new post</h2>
									</div>
								</div>
								<div class="col-md-12">
									<div class="post_category_list ptb_15">
									<Dropdown>
								        <Button type="">
								           Everyone's Square
								            <Icon type="ios-arrow-down"></Icon>
								        </Button>
								        <DropdownMenu slot="list">
								            <DropdownItem>Information Squre</DropdownItem>
								            <DropdownItem>Freelancer</DropdownItem>
								            <DropdownItem>Information Squre</DropdownItem>
								            <DropdownItem>Information Squre</DropdownItem>
								            <DropdownItem>Freelancer</DropdownItem>
								        </DropdownMenu>
								    </Dropdown>
								    <Dropdown>
								        <Button type="">
								           Select Topic
								            <Icon type="ios-arrow-down"></Icon>
								        </Button>
								        <DropdownMenu slot="list">
								            <DropdownItem>Today's humor</DropdownItem>
								            <DropdownItem>Secret Lounge</DropdownItem>
								            <DropdownItem disabled>Job Lounge</DropdownItem>
								            <DropdownItem>Secret Lounge</DropdownItem>
								            <DropdownItem disabled>Job Lounge</DropdownItem>
								        </DropdownMenu>
								    </Dropdown>
									</div>
								</div>
								<div class="col-md-12">
									 <div class="full-mailbox ptb_15">
										<form action="" class="form-compose pl-15 pr-15">
											<div class="input-box-control mb-20">
												<Input v-model="value" placeholder="Suject..." />
											</div>
											<div class="input-box-control mb-20">
												<Input v-model="value8" type="textarea" :autosize="{minRows: 10}" placeholder="Type Post..." />
												<ul class="submit-attach">
													<li><span title="Attach files"><i class="fas fa-paperclip chooseFile"></i><input type="file" class="none chooseFileInput"></span></li>
													<li><span title="Attach images"><i class="fas fa-image chooseImage"></i><input type="file" class="none chooseImageInput"></span></li>
													<li><span title="Bold"><i class="fas fa-bold"></i></span></li>
													<li><span title="Italic"><i class="fas fa-italic"></i></span></li>
													<li><span title="Color palate"><i class="fas fa-palette"></i></span></li>
													<li><span title="Change font"><i class="fas fa-font"></i></span></li>
													<li><span title="Delete"><i class="far fa-trash-alt"></i></span></li>
												</ul>
											</div>
											<div class="submit-content">

												<button class="submit" type="submit">Confirm</button>
												<button class="cancel" type="text">Cancel</button>
												
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>




			