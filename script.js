function threeSum(arr, target) {
// write your code here
	int n=arr.length;
    arr.sort((a,b) =>a-b);
	int closestSum=1000000000;

	for(int i=0;i<n-2;i++){
		int j=i+1;
		int k=n-1;
		while(j<k){
			int sum=arr[i]+arr[j]+arr[k];
			if(Math.abs(target-closestsum)>(target-sum)){
				 closestsum=sum;
			}
			if(sum>target){
				k--;
			}
			else j++;
		}
	}
	return closestsum;
}

module.exports = threeSum;
