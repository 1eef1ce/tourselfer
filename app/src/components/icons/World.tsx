const World = ({...props}) => {
    return (
        <svg width="16"
             height="16"
             viewBox="0 0 16 16"
             fill="none"
             {...props}
        >
            <path
                d="M14.5202 3.38215C14.5199 3.377 14.5193 3.37184 14.5185 3.36671C14.4985 3.33814 14.4739 3.31356 14.4533 3.28556C14.3039 3.08207 14.1458 2.88621 13.9789 2.69795C13.9332 2.64651 13.8874 2.59563 13.8406 2.54533C13.6687 2.36129 13.4885 2.1858 13.2998 2.01891C13.265 1.98803 13.2324 1.95604 13.1975 1.92573C12.7327 1.52748 12.2237 1.18379 11.6805 0.901455C11.6588 0.890034 11.6359 0.880321 11.6136 0.868867C11.3718 0.745953 11.1238 0.635463 10.8706 0.537902C10.8134 0.517338 10.7614 0.49788 10.7071 0.480732C10.4819 0.399581 10.2532 0.328512 10.0212 0.267523C9.95258 0.249237 9.88399 0.230381 9.81426 0.214372C9.58561 0.161221 9.357 0.120629 9.12319 0.087472C9.05233 0.07719 8.9826 0.0634584 8.91112 0.0548846C8.30898 -0.0182949 7.7002 -0.0182949 7.09802 0.0548846C7.02658 0.0634584 6.95685 0.07719 6.88595 0.087472C6.65218 0.120629 6.42125 0.161221 6.19488 0.214372C6.12515 0.230381 6.05656 0.249237 5.98797 0.267523C5.75436 0.328478 5.52575 0.399548 5.30206 0.480732C5.24489 0.500157 5.19287 0.519616 5.13858 0.537902C4.88542 0.635463 4.63738 0.745919 4.3955 0.868867C4.3732 0.880288 4.35036 0.890001 4.32862 0.901455C3.78368 1.18349 3.27296 1.52715 2.80646 1.92573C2.77159 1.95601 2.739 1.98803 2.70414 2.01891C2.5136 2.18657 2.33335 2.36206 2.16341 2.54533C2.11656 2.59563 2.07081 2.64651 2.02509 2.69795C1.8578 2.88581 1.69965 3.08167 1.55068 3.28553C1.53012 3.31353 1.50554 3.33811 1.48551 3.36668C1.4829 3.37167 1.48059 3.37683 1.47864 3.38212C-0.492881 6.14509 -0.492881 9.85496 1.47864 12.6179C1.48059 12.6232 1.48286 12.6283 1.48551 12.6333C1.5055 12.6619 1.53009 12.6865 1.55068 12.7145C1.69969 12.918 1.8578 13.1138 2.02509 13.3021C2.07081 13.3535 2.11656 13.4044 2.16341 13.4547C2.33566 13.6388 2.51588 13.8143 2.70414 13.9811C2.739 14.012 2.77159 14.044 2.80646 14.0743C3.27132 14.4726 3.78033 14.8163 4.32346 15.0986C4.3452 15.11 4.36804 15.1197 4.39035 15.1312C4.63222 15.2541 4.88023 15.3646 5.13343 15.4621C5.1906 15.4827 5.24261 15.5022 5.2969 15.5193C5.5221 15.6005 5.75075 15.6715 5.98281 15.7325C6.0514 15.7508 6.11999 15.7697 6.18972 15.7857C6.41837 15.8388 6.64698 15.8794 6.88079 15.9126C6.95166 15.9229 7.02139 15.9366 7.09286 15.9452C7.69501 16.0183 8.30379 16.0183 8.90597 15.9452C8.9774 15.9366 9.04713 15.9229 9.11804 15.9126C9.35181 15.8794 9.58273 15.8388 9.8091 15.7857C9.87883 15.7697 9.94742 15.7508 10.016 15.7325C10.25 15.6716 10.4786 15.6005 10.7019 15.5193C10.7591 15.4999 10.8111 15.4804 10.8654 15.4621C11.1186 15.3646 11.3666 15.2541 11.6085 15.1312C11.6308 15.1198 11.6536 15.11 11.6754 15.0986C12.2185 14.8162 12.7275 14.4726 13.1924 14.0743C13.2272 14.044 13.2598 14.012 13.2947 13.9811C13.4852 13.8139 13.6655 13.6384 13.8354 13.4547C13.8823 13.4044 13.928 13.3535 13.9737 13.3021C14.141 13.1138 14.2992 12.918 14.4481 12.7145C14.4687 12.6865 14.4933 12.6619 14.5133 12.6333C14.5159 12.6283 14.5182 12.6232 14.5202 12.6179C16.4917 9.855 16.4917 6.14512 14.5202 3.38215ZM13.868 4.46363C14.4147 5.36392 14.7447 6.37886 14.8323 7.42849H11.4084C11.3665 6.7474 11.2593 6.07194 11.0884 5.41135C12.0555 5.23023 12.9916 4.91105 13.868 4.46363ZM9.45644 1.2987C9.48846 1.30614 9.5193 1.31642 9.55132 1.32385C9.75595 1.37188 9.95888 1.42674 10.1572 1.49533C10.1875 1.50561 10.2172 1.51764 10.247 1.52849C10.4436 1.59708 10.6374 1.6731 10.8272 1.75713C10.8603 1.77257 10.8929 1.78972 10.9261 1.80516C11.1078 1.89167 11.2854 1.98521 11.4588 2.08582L11.5731 2.15498C11.7377 2.25559 11.8977 2.36323 12.0532 2.47794C12.0932 2.50708 12.1332 2.53511 12.1727 2.5671C12.3251 2.68141 12.4711 2.80392 12.6105 2.93464C12.6471 2.96779 12.6848 3.00038 12.7208 3.03468C12.8672 3.17357 13.0066 3.32046 13.1415 3.47251C13.1587 3.49251 13.177 3.51079 13.1941 3.52968C12.4202 3.89853 11.6002 4.16191 10.7563 4.31275C10.3653 3.23794 9.84883 2.21302 9.21757 1.25931C9.29695 1.27358 9.37813 1.28159 9.45644 1.2987ZM5.73651 7.42846C5.78159 6.81 5.88689 6.1974 6.0509 5.59937C6.69853 5.6763 7.35014 5.71445 8.00233 5.71368C8.65511 5.71348 9.30733 5.67436 9.95546 5.59649C10.1192 6.19549 10.2239 6.80906 10.2681 7.42846H5.73651ZM10.2681 8.57166C10.223 9.19012 10.1177 9.80272 9.95372 10.4007C9.30609 10.3238 8.65448 10.2857 8.00229 10.2864C7.34954 10.2857 6.69736 10.3238 6.04916 10.4007C5.88562 9.80268 5.78092 9.19009 5.73648 8.57166H10.2681ZM8.00229 1.51365C8.65277 2.43558 9.18777 3.4338 9.59533 4.48594C9.06619 4.54214 8.53444 4.57037 8.00229 4.57054C7.47075 4.5699 6.93957 4.5415 6.41097 4.48537C6.81903 3.43393 7.35339 2.43605 8.00229 1.51365ZM2.86369 3.47191C2.99803 3.31986 3.13806 3.17296 3.28438 3.03407C3.32039 2.99978 3.35813 2.96719 3.3947 2.93403C3.5357 2.80563 3.68166 2.68311 3.83254 2.5665C3.87199 2.53619 3.91198 2.50933 3.95201 2.47734C4.10747 2.36303 4.26753 2.25536 4.43214 2.15438L4.54645 2.08522C4.71984 1.98387 4.89741 1.8903 5.07917 1.80456C5.11233 1.78912 5.14491 1.77197 5.17807 1.75653C5.36784 1.67079 5.56162 1.59477 5.75825 1.52788C5.78796 1.51703 5.81542 1.50501 5.84797 1.49473C6.04631 1.42841 6.2481 1.37355 6.45387 1.32325C6.48589 1.31581 6.51674 1.30553 6.54932 1.29867C6.62763 1.28152 6.70881 1.27351 6.78825 1.25921C6.15673 2.21309 5.64009 3.23821 5.24894 4.31322C4.40498 4.16238 3.58504 3.899 2.81111 3.53015C2.82826 3.51019 2.84654 3.49191 2.86369 3.47191ZM2.13662 4.46363C3.0128 4.91102 3.94872 5.23019 4.9157 5.41135C4.74492 6.07197 4.63792 6.74743 4.59619 7.42849H1.17236C1.25991 6.37886 1.59 5.36392 2.13662 4.46363ZM2.13662 11.5365C1.58997 10.6362 1.25987 9.62129 1.17236 8.57166H4.59619C4.63812 9.25275 4.74529 9.92821 4.91627 10.5888C3.94913 10.7699 3.013 11.0891 2.13662 11.5365ZM6.54818 14.7014C6.51617 14.694 6.48532 14.6837 6.4533 14.6763C6.24867 14.6282 6.04574 14.5734 5.8474 14.5048C5.81709 14.4945 5.78739 14.4825 5.75765 14.4716C5.56102 14.403 5.36727 14.327 5.17747 14.243C5.14431 14.2275 5.11172 14.2104 5.07857 14.195C4.89681 14.1084 4.71923 14.0149 4.54585 13.9143L4.43154 13.8451C4.26693 13.7445 4.10687 13.6369 3.9514 13.5222C3.91138 13.493 3.87139 13.465 3.83194 13.433C3.67952 13.3187 3.53356 13.1962 3.3941 13.0655C3.35753 13.0323 3.31978 12.9997 3.28378 12.9654C3.13745 12.8265 2.99799 12.6797 2.86309 12.5276C2.84594 12.5076 2.82766 12.4893 2.81051 12.4704C3.58447 12.1016 4.40438 11.8382 5.24834 11.6874C5.63932 12.7622 6.15579 13.7871 6.78705 14.7408C6.70764 14.7266 6.62649 14.7186 6.54818 14.7014ZM8.00229 14.4865C7.35182 13.5646 6.81682 12.5664 6.40926 11.5142C7.46783 11.4003 8.53558 11.4003 9.59416 11.5142L9.59359 11.5148C9.18559 12.5662 8.65123 13.5641 8.00229 14.4865ZM13.1409 12.5282C13.0066 12.6803 12.8666 12.8272 12.7202 12.966C12.6842 13.0003 12.6465 13.0329 12.6099 13.0661C12.4689 13.1949 12.323 13.3174 12.1721 13.4336C12.1326 13.4639 12.0926 13.4936 12.0526 13.5228C11.8971 13.6371 11.7371 13.7448 11.5725 13.8457L11.4582 13.9149C11.2852 14.0159 11.1076 14.1094 10.9255 14.1956C10.8923 14.211 10.8597 14.2281 10.8265 14.2436C10.6368 14.3293 10.443 14.4053 10.2464 14.4722C10.2167 14.4831 10.1892 14.4951 10.1566 14.5054C9.95831 14.5717 9.75652 14.6266 9.55075 14.6769C9.51873 14.6843 9.48789 14.6946 9.4553 14.7014C9.377 14.7186 9.29581 14.7266 9.21637 14.7409C9.84762 13.7872 10.3641 12.7623 10.7551 11.6875C11.599 11.8383 12.419 12.1017 13.1929 12.4705C13.1764 12.4899 13.1581 12.5082 13.1409 12.5282ZM13.868 11.5365C12.9918 11.0891 12.0559 10.77 11.0889 10.5888C11.2597 9.92818 11.3667 9.25272 11.4084 8.57166H14.8323C14.7447 9.62126 14.4146 10.6362 13.868 11.5365Z"
                fill="white"/>
        </svg>
    );
};

export default World;