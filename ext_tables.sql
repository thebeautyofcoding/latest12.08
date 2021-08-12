  
#
# Table structure for table 'tx_heiner_domain_model_content'
#
CREATE TABLE tx_heiner_domain_model_content (
	parent_uid varchar(255) DEFAULT '' NOT NULL,
	image int(11) unsigned NOT NULL default '0',
	header varchar(255) DEFAULT '' NOT NULL,
	bodytext text

);
CREATE TABLE tx_heiner_domain_model_footer (
	parent_uid varchar(255) DEFAULT '' NOT NULL,
   uid int(11) unsigned DEFAULT 0 NOT NULL auto_increment,
   sorting	int(11) unsigned DEFAULT 0 NOT NULL,
	service varchar(255) DEFAULT '' NOT NULL,
	serviceLink varchar(255) DEFAULT '' NOT NULL,
    PRIMARY KEY (uid),
    KEY parent (pid)
 
);


CREATE TABLE tt_content (

	portfolio_list varchar(255) DEFAULT '' NOT NULL,
	custom_footer varchar(255) DEFAULT '' NOT NULL,
	service_entry varchar(255) DEFAULT '' NOT NULL,



);

CREATE TABLE tt_content (

	portfolio_list_item varchar(255) DEFAULT '' NOT NULL,
	footer_nav varchar(255) DEFAULT '' NOT NULL,


);