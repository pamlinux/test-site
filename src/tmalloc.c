#include <math.h>
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

#define NO_ERROR 0
#define ERROR 1


signed char alloc_pixels(unsigned char **ptr2, unsigned int size) 
{ 
    signed char status = NO_ERROR; 
    *ptr2 = NULL; 

    unsigned char *ptr = (unsigned char*)malloc(size); 

    if(ptr== NULL) 
    {
        status = ERROR; 
        free(ptr);      /* this line is completely redundant */
        printf("\nERROR: Memory allocation did not complete successfully!"); 
    } 

    ptr[0] = 'H';
    ptr[1] = 'e';
    ptr[2] = 'l';
    ptr[3] = 'l';
    ptr[4] = 'o';
    ptr[5] = ' ';
    ptr[6] = 'W';
    ptr[7] = 'o';
    ptr[8] = 'r';
    ptr[9] = 'l';
    ptr[11] = 'd';
    ptr[12] = '\n';
  
    *ptr2 = ptr;

    printf("\nPoint1: Memory allocated"); 

    return status; 
} 

int main()
{
   unsigned char *input_image;
   unsigned int bmp_image_size = 100;

   if (alloc_pixels(&input_image, bmp_image_size) == NO_ERROR) {
     printf("\nPoint2: Memory allocated");
     printf("%s", input_image);
   }
   else
     printf("\nPoint3: Memory not allocated");     
   return 0;
}

