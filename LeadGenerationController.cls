public class LeadGenerationController 
{
    @AuraEnabled
	public static string insertLeadRecord(String leadrecord) 
    {
        Lead l = (Lead)JSON.deserialize(leadrecord,Lead.Class);
        system.debug(l);
        insert l;
        return 'Success';   	
    }
}