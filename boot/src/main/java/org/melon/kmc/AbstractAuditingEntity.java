package org.melon.kmc;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class AbstractAuditingEntity {

	/*
//	@CreatedBy
	@NotNull
//	@Column(name = "created_by", nullable = false, length = 50, updatable = false)
	@JsonIgnore
	private String createdBy;
	
//	@CreatedDate
	@NotNull
//	@Column(name = "created_date", nullable = false)
//	@Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime")
	@JsonIgnore
	private DateTime createdDate = DateTime.now();
	
//	@LastModifiedBy
//	@Column(name = "last_modified_by", length = 50)
	@JsonIgnore
	private String lastModifiedBy;
	
//	@LastModifiedDate
//	@Type(type = "org.jadira.usertype.dateandtime.joda.PersistentDateTime")
//	@Column(name = "last_modified_date")
	@JsonIgnore
	private DateTime lastModifiedDate = DateTime.now();

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public DateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(DateTime createdDate) {
		this.createdDate = createdDate;
	}

	public String getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(String lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}

	public DateTime getLastModifiedDate() {
		return lastModifiedDate;
	}

	public void setLastModifiedDate(DateTime lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}
	*/
}
