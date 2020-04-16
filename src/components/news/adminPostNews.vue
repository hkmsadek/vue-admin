<template>
	<div>
		<div class="content">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-12 col-md-10">
						<div class="add_invoice_new _box_shadow _border_radious _mar_b30 _p20">
							<p class="_title0">Post New News</p>

							<div class="add_invoice_new_form">
								<form>
									<div class="row">		

									<div class="col-lg-12">
										<div class="n_post_category post_category_list ptb_15">
											<div class="col-lg-12 col-md-12 col--sm-12">
		                                        <div class="n_single_post">
		                                            <div class="row">
		                                                <div class="col-md-3 col-sm-12">
		                                                    <span class="n_post_title">title</span>
		                                                </div>
		                                                <div class="col-md-9 col-sm-12">
		                                                    <span class="n_post_input">
		                                                    <!--<input type="text" placeholder="text">-->
		                                                    <Input v-model="value" placeholder="Text..." style="width: 500px"/>
		                                                    </span>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div class="col-lg-12">
		                                        <div class="n_single_post">
		                                            <div class="row">
		                                                <div class="col-md-3">
		                                                    <span class="n_post_title">News Paper Name</span>
		                                                </div>
		                                                <div class="col-md-9">
		                                                    <span class="n_post_input">
		                                                    <Input v-model="value" placeholder="News Paper Name..." style="width: 500px"/>
		                                                    </span>
		                                                </div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div class="col-lg-12">
		                                        <div class="n_single_post">
		                                            <div class="row">
		                                                <div class="col-md-3">
		                                                    <span class="n_post_title">category</span>
		                                                </div>
		                                                <div class="col-md-9">
                                                        	<Dropdown>
														        <Button type="">
														           World
														            <Icon type="ios-arrow-down"></Icon>
														        </Button>
														        <DropdownMenu slot="list">
														            <DropdownItem>world</DropdownItem>
														            <DropdownItem>sport</DropdownItem>
														            <DropdownItem>social</DropdownItem>
														            <DropdownItem>science</DropdownItem>
														            <DropdownItem divided>art</DropdownItem>
														        </DropdownMenu>
														    </Dropdown>
			                                                </div>
			                                            </div>
			                                        </div>
		                                    	</div>
			                                    <div class="col-lg-12">
			                                        <div class="n_single_post">
			                                            <div class="row">
			                                                <div class="col-md-3">
			                                                    <span class="n_post_title">tags</span>
			                                                </div>
			                                                <div class="col-md-9">
			                                                    <span class="n_post_tag">
			                                                     <Input v-model="value" placeholder="" style="width: 500px"/>

			                                                    </span></br>
			                                                    <span class="n_post_tag"><p class="post_tag_list">world<i class="fas fa-times"></i></p></span>
			                                                    <span class="n_post_tag"><p class="post_tag_list">world<i class="fas fa-times"></i></p></span>
			                                                    <span class="n_post_tag"><p class="post_tag_list">world<i class="fas fa-times"></i></p></span> 
			                                                    
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="col-lg-12">
			                                        <div class="n_single_post">
			                                            <div class="row">
			                                                <div class="col-md-3">
			                                                    <span class="n_post_title">upload image</span>
			                                                </div>
			                                                <div class="col-md-9">
			                                                    <div class="form-group n_post_img">
			                                                        <!--<input type="file" class="form-control-file">-->
			                                                        <Button icon="ios-cloud-upload-outline">Upload files</Button>
			                                                    </div>
			                                                    <p>select more image<i class="fas fa-plus"></i></p>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="col-lg-12">
			                                        <div class="n_single_post">
			                                            <div class="row">
			                                                <div class="col-md-3">
			                                                    <span class="n_post_title">make card news</span>
			                                                </div>
			                                                <div class="col-md-9">
			                                                    <div class="form-group n_post_img">
			                                                        <Checkbox label="">
															            <Icon type="card"></Icon>
															            <span>Card</span>
															        </Checkbox>
			                                                    </div>
			                                                   
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="col-lg-12">
			                                        <div class="n_single_post">
			                                            <div class="row">
			                                                <div class="col-md-3">
			                                                    <span class="n_post_title">Description</span>
			                                                </div>
			                                                <div class="col-md-9">
			                                                    <span class="n_post_input">
			                                                   <Input v-model="value6" type="textarea" :rows="4" placeholder="Write Your News..." style="width: 500px"/>
			                                                    </span>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="col-lg-12">
			                                        <div class="n_single_post">
			                                            <div class="row">
			                                                <div class="col-md-3">
			                                                    <span class="n_post_title">url</span>
			                                                </div>
			                                                <div class="col-md-9">
			                                                    <span class="n_post_input">
			                                                    <Input v-model="value" placeholder="Url" style="width: 500px"/>

			                                                    </span>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                    <div class="col-lg-12">
			                                        <div class="n_post_submit submit-content">
			                                            <button class="submit" type="submit">Submit</button>
			                                            <button class="cancel" type="text">Cancel</button>
			                                        </div>
			                                    </div>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>