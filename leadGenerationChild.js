import { LightningElement, track, api } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class LeadGenerationChild extends LightningElement {
    @track childFlag1 = true;
    @track childFlag2 = false;
    @track firstName;
    @track lastName;
    @track companyName;
    @track status;
    @track phone;
    @track mobile;
    @track fax;
    @track email;
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

    @track fieldValue;
    value = 'inProgress';

    get options() {
        return [
            { label: 'Open - Not Contacted', value: 'Open - Not Contacted' },
            { label: 'Open - Contacted', value: 'Open - Contacted' },
            { label: 'Closed - Converted', value: 'Closed - Converted' },
            { label: 'Closed - Not Converted', value: 'Closed - Not Converted' },
        ];
    }
    get ratings() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Cold', value: 'Cold' },
            { label: 'Warm', value: 'Warm' },
        ];
    }

    get industryOptions() {
        return [
            { label: 'Agriculture', value: 'Agriculture' },
            { label: 'Apparel', value: 'Apparel' },
            { label: 'Banking', value: 'Banking' },
            { label: 'Biotechnology', value: 'Biotechnology' },
            { label: 'Chemicals', value: 'Chemicals' }
        ];
    }
   
    get primaryOptions() {
        return [
            { label: 'No', value: 'No' },
            { label: 'Yes', value: 'Yes' }
        ];
    }
    

    @api
    backOn() {
        this.childFlag2 = true;
    }

    handleInput(event) {

        if (event.currentTarget.dataset.id == 'fname') {
            this.firstName = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'lname') {
            this.lastName = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'Cname') {
            this.companyName = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'status') {
            this.status = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'phone') {
            this.phone = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'mobile') {
            this.mobile = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'fax') {
            this.fax = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'email') {
            this.email = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'title') {
            this.title = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'leadsource') {
            this.leadsource = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'website') {
            this.website = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'industry') {
            this.industry = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'annualrevenue') {
            this.annualrevenue = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'employees') {
            this.noofemployees = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'rating') {
            this.rating = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'rating') {
            this.rating = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'street') {
            this.street = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'city') {
            this.city = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'state') {
            this.state = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'postal') {
            this.postal = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'country') {
            this.country = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'pdinterest') {
            this.pdinterest = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'generator') {
            this.generators = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'sic') {
            this.siccode = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'primary') {
            this.primary = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'locations') {
            this.locations = event.target.value;
        }
        if (event.currentTarget.dataset.id == 'description') {
            this.description = event.target.value;
        }
        this.dispatchEvent(new CustomEvent('input',
            {
                detail:
                {
                    fname: this.firstName,
                    lname: this.lastName,
                    cname: this.companyName,
                    status: this.status,
                    phone: this.phone,
                    mobile: this.mobile,
                    fax: this.fax,
                    email: this.email,
                    title: this.title,
                    leadsource: this.leadsource,
                    website: this.website,
                    industry: this.industry,
                    annualrevenue: this.annualrevenue,
                    emp: this.noofemployees,
                    rating: this.rating,
                    street: this.street,
                    city: this.city,
                    postal: this.postal,
                    state: this.state,
                    country: this.country,
                    pdint: this.pdinterest,
                    gen: this.generators,
                    sic: this.siccode,
                    primary: this.primary,
                    locations: this.locations,
                    description: this.description
                }
            }));
    }

    async handleNext() {
        if (this.lastName == null || this.companyName == null || this.status == null) {
            await LightningAlert.open({
                message: 'We hit a snag, please fill all the required fields',
                theme: 'error', // a red theme intended for error states
                label: 'Error!', // this is the header text
            });
        }
        else {
            this.childFlag1 = false;
            this.childFlag2 = true;
        }
    }

    handlePrevious() {
        this.childFlag1 = true;
        this.childFlag2 = false;
    }

    handleReview(event) {
        this.dispatchEvent(new CustomEvent('review'));
        this.childFlag1 = false;
        this.childFlag2 = false;
    }
}