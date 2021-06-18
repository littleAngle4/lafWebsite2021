branch=`git rev-parse --abbrev-ref HEAD`
git status
git add .
echo "Enter your message : \c"
read msg
git commit -m "$msg"
git pull origin $branch
git push origin $branch