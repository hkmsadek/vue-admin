<template>
	<div>
		<div class="content">
			<div class="container">
				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="catagory_main _box_shadow _border_radious _mar_b30 _p20">
					<div class="catagory_main_top">
						<ul class="catagory_main_list">
							<li><Tag closable @on-close="handleClose">Economy</Tag></li>
							<li><Tag closable @on-close="handleClose">Education</Tag></li>
							<li><Tag closable @on-close="handleClose">Social</Tag></li>
							<li><Tag closable @on-close="handleClose">Life/Culture</Tag></li>
							<li><Tag closable @on-close="handleClose">World</Tag></li>
							<li><Tag closable @on-close="handleClose">IT/Science</Tag></li>
							<li><Tag closable @on-close="handleClose">Trot</Tag></li>
							<li><Tag closable @on-close="handleClose">Sports</Tag></li>
							<li><Tag closable @on-close="handleClose">Entertainments</Tag></li>
							<li><Tag closable @on-close="handleClose">Art</Tag></li>
							<li><Tag closable @on-close="handleClose">Humor</Tag></li>
							<li><Tag closable @on-close="handleClose">Politics</Tag></li>
						</ul>
					</div>

					<div class="catagory_main_bottom">
						<p class="catagory_main_title">Add More Category </p>

						<div class="catagory_main_inputs">
							<Input v-model="value11">
						        <span slot="append">
						        	<Dropdown trigger="click" style="margin-left: 20px">
								        <a href="javascript:void(0)">
								            click
								            <Icon type="ios-arrow-down"></Icon>
								        </a>
								        <DropdownMenu slot="list">
								            <DropdownItem>Economy</DropdownItem>
								            <DropdownItem>Education</DropdownItem>
								            <DropdownItem>Social</DropdownItem>
								            <DropdownItem>Life/Culture</DropdownItem>
								            <DropdownItem>World</DropdownItem>
								            <DropdownItem>IT/Science</DropdownItem>
								            <DropdownItem>Trot</DropdownItem>
								            <DropdownItem>Sports</DropdownItem>
								            <DropdownItem>Entertainments</DropdownItem>
								            <DropdownItem>Art</DropdownItem>
								            <DropdownItem>Humor</DropdownItem>
								            <DropdownItem>Politics</DropdownItem>
								        </DropdownMenu>

								    </Dropdown>
						        </span>
						    </Input>
						</div>
					</div>
				</div>


				<!--~~~~~~~ TABLE ONE ~~~~~~~~~-->
				<div class="catagory_main _box_shadow _border_radious _mar_b30 _p20">
					<div class="catagory_main_top">
						<ul class="catagory_main_list">
							<li><Tag closable @on-close="handleClose">Economy</Tag></li>
							<li><Tag closable @on-close="handleClose">Education</Tag></li>
							<li><Tag closable @on-close="handleClose">Social</Tag></li>
							<li><Tag closable @on-close="handleClose">Life/Culture</Tag></li>
							<li><Tag closable @on-close="handleClose">World</Tag></li>
							<li><Tag closable @on-close="handleClose">IT/Science</Tag></li>
							<li><Tag closable @on-close="handleClose">Trot</Tag></li>
							<li><Tag closable @on-close="handleClose">Sports</Tag></li>
							<li><Tag closable @on-close="handleClose">Entertainments</Tag></li>
							<li><Tag closable @on-close="handleClose">Art</Tag></li>
							<li><Tag closable @on-close="handleClose">Humor</Tag></li>
							<li><Tag closable @on-close="handleClose">Politics</Tag></li>
						</ul>
					</div>

					<div class="catagory_main_bottom">
						<p class="catagory_main_title">Add Tag </p>

						<div class="catagory_main_inputs">
							<Input v-model="value11">
						        <span slot="append">
						        	<Dropdown trigger="click" style="margin-left: 20px">
								        <a href="javascript:void(0)">
								            click
								            <Icon type="ios-arrow-down"></Icon>
								        </a>
								        <DropdownMenu slot="list">
								            <DropdownItem>Economy</DropdownItem>
								            <DropdownItem>Education</DropdownItem>
								            <DropdownItem>Social</DropdownItem>
								            <DropdownItem>Life/Culture</DropdownItem>
								            <DropdownItem>World</DropdownItem>
								            <DropdownItem>IT/Science</DropdownItem>
								            <DropdownItem>Trot</DropdownItem>
								            <DropdownItem>Sports</DropdownItem>
								            <DropdownItem>Entertainments</DropdownItem>
								            <DropdownItem>Art</DropdownItem>
								            <DropdownItem>Humor</DropdownItem>
								            <DropdownItem>Politics</DropdownItem>
								        </DropdownMenu>

								    </Dropdown>
						        </span>
						    </Input>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>