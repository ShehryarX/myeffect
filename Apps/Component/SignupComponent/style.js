var Container = styled.div`
          width: 500px;
          height: 200px;
          background: red;
          position: relative;
          overflow: hidden;
        
            &:after, before 
              content: '';
              background: white;
              position: absolute;
              top: -10px;
              left: 0;
              width: 100%;
              height: 20px;
              border-radius: 0 0 50% 50%;
        
        `;
export default Container;