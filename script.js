function threeSum(arr, target) {
// write your code here
	let n=arr.length;
    arr.sort((a,b) =>a-b);
	let closestSum=1000000000;

	for(let i=0;i<n-2;i++){
		let j=i+1;
		let k=n-1;
		while(j<k){
			let sum=arr[i]+arr[j]+arr[k];
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
