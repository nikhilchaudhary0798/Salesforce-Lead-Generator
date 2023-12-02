import { LightningElement, track } from 'lwc';
import insertLeadRecord from "@salesforce/apex/LeadGenerationController.insertLeadRecord";
export default class LeadGenerationParent extends LightningElement {
    // -----flags-----
    @track parentFlag = false;
    @track childFlag;
    @track successflag;
    //------fields variable-----
    @track leadFullName;
    @track fName
    @track leadCompany;
    @track leadStatus;
    @track leadPhone;
    @track leadMobile;
    @track leadFax;
    @track leadEmail;
    @track title;
    @track leadsource;
    @track website;
    @track industry;
    @track annualrevenue;
    @track noofemployees;
    @track rating;
    @track street;
    @track city;
    @track postal;
    @track state;
    @track country;
    @track pdinterest;
    @track generators;
    @track siccode;
    @track primary;
    @track locations;
    @track description;
    //----Backend use variables-----
    @track leadDataString;
    @track result;
    @track error;

    handleReviewEvent(event) {
        this.parentFlag = true;
    }

    handleInput(event) {
        this.fName = event.detail.fname;
        this.lName = event.detail.lname;
        if (this.fName != undefined && this.lName != undefined) {
            this.leadFullName = this.fName + ' ' + this.lName;
        }
        else if (this.fName == undefined) {
            this.leadFullName = this.lName;
        }
        this.leadCompany = event.detail.cname;
        this.leadStatus = event.detail.status;
        this.leadPhone = event.detail.phone;
        this.leadMobile = event.detail.mobile;
        this.leadFax = event.detail.fax;
        this.leadEmail = event.detail.email;
        this.title = event.detail.title;
        this.leadsource = event.detail.leadsource;
        this.website = event.detail.website;
        this.industry = event.detail.industry;
        this.annualrevenue = event.detail.annualrevenue;
        this.noofemployees = event.detail.emp;
        this.rating = event.detail.rating;
        this.street = event.detail.street;
        this.city = event.detail.city;
        this.postal = event.detail.postal;
        this.state = event.detail.state;
        this.country = event.detail.country;
        this.pdinterest = event.detail.pdint;
        this.generators = event.detail.gen;
        this.siccode = event.detail.sic;
        this.primary = event.detail.primary;
        this.locations = event.detail.locations;
        this.description = event.detail.description;
    }

    handleBack() {
        this.template.querySelector('c-lead-generation-child').backOn();
        this.parentFlag = false;
    }

    handlePrint() {
        window.print();
    }
    handleSave() {
        this.parentFlag = false;
        this.successflag = true;

        const leadData =
        {
            firstname: this.fName,
            lastname: this.lName,
            company: this.leadCompany,
            status: this.leadStatus,
            Phone: this.leadPhone,
            Mobilephone: this.leadMobile,
            Email: this.leadEmail,
            Fax: this.leadFax,
            leadsource: this.leadsource,
            title: this.title,
            industry: this.industry,
            website: this.website,
            numberofemployees: this.noofemployees,
            annualrevenue: this.annualrevenue,
            street: this.street,
            rating: this.rating,
            postalcode: this.postal,
            city: this.city,
            country: this.country,
            state: this.state,
            ProductInterest__c: this.pdinterest,
            CurrentGenerators__c: this.generators,
            siccode__c: this.siccode,
            Primary__c: this.primary,
            NumberofLocations__c: this.locations,
            description: this.description
        };

        this.leadDataString = JSON.stringify(leadData);
        console.log(this.leadDataString);
        insertLeadRecord({leadrecord : this.leadDataString })
            .then(result => {
                debugger;
                alert(result);
            })
            .catch(error => {
                this.error = error;
                alert('error' + error);
            });

    }
}